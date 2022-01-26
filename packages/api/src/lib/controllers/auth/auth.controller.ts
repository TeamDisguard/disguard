import {
  ApiError,
  ApiResponse,
  catchServerError,
  authService,
  userService,
  sessionService,
  getDevice
} from "#lib";

import { HttpCodes, oauth2Url } from "#consts";
import { OAuth2Scopes } from "discord-api-types/v9";

export const login = catchServerError(async (_req, res) => {
  return res.redirect(oauth2Url);
});

export const callback = catchServerError(async (req, res) => {
  const { error, code } = res.locals.query;

  if (error) return res.redirect("/api/v1/auth/login");

  const auth = await authService.authorizationCode(code);
  if (!auth || !auth.scope.includes(OAuth2Scopes.Identify)) {
    throw new ApiError(HttpCodes.Forbidden).setInfo("Invalid OAuth2 code.");
  }

  const selfUser = await userService.getSelf(auth.access_token);
  if (!selfUser) throw new ApiError(HttpCodes.Unauthorized);

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
    expiresIn: auth.expires_in * 1000,
    device: getDevice(req.useragent)
  });

  return res
    .cookie("session", session.token, {
      path: "/",
      httpOnly: true,
      maxAge: auth.expires_in * 1000
    })
    .redirect("/");
});

export const logout = catchServerError(async (_req, res) => {
  const { userId, session } = res.locals.auth;

  const deleted = await sessionService.deleteSession(userId, session.id);
  if (!deleted) throw new ApiError(HttpCodes.NotFound).setInfo("Session was not found.");

  return new ApiResponse(HttpCodes.NoContent, res.clearCookie("session")).send();
});
