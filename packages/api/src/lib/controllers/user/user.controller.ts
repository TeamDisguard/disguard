import { ApiResponse, ApiResponseJson, userService, catchServerError } from "#lib";
import { HttpCodes } from "#consts";

export const getMe = catchServerError(async (_req, res, next) => {
  const user = await userService.getUser(res.locals.userId);
  if (!user) return next(new Error("Missing auth user"));

  const data = new ApiResponseJson()
    .set("id", user.id)
    .set("username", user.username)
    .set("discriminator", user.discriminator)
    .set("avatar", user.avatar)
    .set("permissions", user.sitePermissions);

  return new ApiResponse(HttpCodes.Ok, res).setData(data).send();
});
