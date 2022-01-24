import {
  ApiError,
  ApiResponse,
  ApiResponseJson,
  catchServerError,
  getDevice,
  authService,
  userService,
  sessionService
} from "#lib";

import { HttpCodes, oauth2Url } from "#consts";
import { OAuth2Scopes } from "discord-api-types";

export const login = catchServerError(async (_req, res) => {
  return res.redirect(oauth2Url);
});

export const callback = catchServerError(async (req, res) => {
  const { error, code } = req.query;

  if (typeof error === "string") {
    return res.redirect("/api/v1/auth/login");
  }

  if (typeof code !== "string") {
    throw new ApiError(HttpCodes.Forbidden);
  }

  const auth = await authService.authorizationCode(code);

  if (!auth || !auth.scope.includes(OAuth2Scopes.Identify)) {
    throw new ApiError(HttpCodes.Forbidden).setInfo("Missing `identify` scope.");
  }

  const selfUser = await userService.getSelf(auth.access_token);

  if (!selfUser) {
    throw new ApiError(HttpCodes.Unauthorized);
  }

  const user = await userService.upsertUser({
    id: selfUser.id,
    username: selfUser.username,
    discriminator: selfUser.discriminator,
    avatar: selfUser.avatar
  });

  const session = await sessionService.createSession({
    userId: user.id,
    accessToken: auth.access_token,
    refreshToken: auth.refresh_token,
    expiresIn: auth.expires_in,
    device: getDevice(req.useragent)
  });

  res.cookie("session", session.token, {
    path: "/",
    httpOnly: true,
    maxAge: auth.expires_in * 1000
  });

  res.redirect("/");
});

export const getMe = catchServerError(async (_req, res) => {
  const { session } = res.locals;

  const data = new ApiResponseJson()
    .set("id", session.id)
    .set("device", session.device)
    .set("expires_at", session.expiresAt.toISOString())
    .set("created_at", session.createdAt.toISOString());

  return new ApiResponse(HttpCodes.Ok, res).setData(data).send();
});

export const getMeSessions = catchServerError(async (_req, res, next) => {
  const sessions = await sessionService.getSessionsForUser(res.locals.userId);
  if (!sessions.length) return next(new ApiError(HttpCodes.Unauthorized));

  const data = sessions.map((session) => ({
    id: session.id,
    device: session.device,
    expires_at: session.expiresAt.toISOString(),
    created_at: session.createdAt.toISOString()
  }));

  return new ApiResponse(HttpCodes.Ok, res).setData(data).send();
});

export const deleteMeSession = catchServerError(async (req, res, next) => {
  if (req.params.sessionId === res.locals.sessionId) {
    return next(
      new ApiError(HttpCodes.BadRequest).setInfo("Cannot delete current session.")
    );
  }

  const isDeleted = await sessionService.deleteSession(
    res.locals.userId,
    req.params.sessionId
  );

  if (!isDeleted) {
    return next(new ApiError(HttpCodes.NotFound).setInfo("Session was not found."));
  }

  return new ApiResponse(HttpCodes.NoContent, res).send();
});

export const logout = catchServerError(async (_req, res, next) => {
  const isDeleted = await sessionService.deleteSession(
    res.locals.userId,
    res.locals.session.id
  );

  if (!isDeleted) {
    return next(new ApiError(HttpCodes.NotFound).setInfo("Session was not found."));
  }

  res.clearCookie("session");

  return new ApiResponse(HttpCodes.NoContent, res).send();
});
