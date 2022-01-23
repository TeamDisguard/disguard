import {
  ApiError,
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

  res.setHeader(
    "Set-Cookie",
    `session=${session.token}; Max-Age=${auth.expires_in}; Path=/; HttpOnly`
  );

  res.redirect("/");
});
