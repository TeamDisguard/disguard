import {
  ApiResponse,
  ApiError,
  ApiResponseJson,
  userService,
  catchServerError
} from "#lib";

import { HttpCodes } from "#consts";

export const getMe = catchServerError(async (_req, res, next) => {
  const user = await userService.getUserById(res.locals.userId);
  if (!user) return next(new Error("Missing auth user"));

  const data = new ApiResponseJson()
    .set("id", user.id)
    .set("username", user.username)
    .set("discriminator", user.discriminator)
    .set("avatar", user.avatar)
    .set("permissions", user.sitePermissions);

  return new ApiResponse(HttpCodes.Ok, res).setData(data).send();
});

export const getUser = catchServerError(async (req, res, next) => {
  const { userId } = req.params;

  const user = await userService.getUserById(userId);
  if (!user) return next(new ApiError(HttpCodes.NotFound).setInfo("User was not found."));

  const data = new ApiResponseJson()
    .set("id", user.id)
    .set("username", user.username)
    .set("discriminator", user.discriminator)
    .set("avatar", user.avatar)
    .set("permissions", user.sitePermissions);

  return new ApiResponse(HttpCodes.Ok, res).setData(data).send();
});

export const searchUser = catchServerError(async (_req, res) => {
  const { query } = res.locals;

  const users = await userService.searchUser(query.query, query.limit);

  const data = users.map((user) => ({
    id: user.id,
    username: user.username,
    discriminator: user.discriminator,
    avatar: user.avatar,
    permissions: user.sitePermissions
  }));

  return new ApiResponse(HttpCodes.Ok, res).setData(data).send();
});
