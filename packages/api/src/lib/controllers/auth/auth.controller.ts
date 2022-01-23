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
    maxAge: auth.expires_in
  });

  res.redirect("/");
});

export const getMe = catchServerError(async (_req, res, next) => {
  const session = await sessionService.getSessionById(res.locals.sessionId);
  if (!session) return next(new ApiError(HttpCodes.Unauthorized));

  const data = new ApiResponseJson()
    .set("id", session.id)
    .set("device", session.device)
    .set("expires_at", session.expiresAt.toISOString())
    .set("created_at", session.createdAt.toISOString());

  return new ApiResponse(HttpCodes.Ok, res).setData(data).send();
});
