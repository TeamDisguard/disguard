import {
  ApiResponse,
  ApiError,
  ApiResponseJson,
  flagService,
  catchServerError
} from "#lib";

import { HttpCodes } from "#consts";

export const createFlag = catchServerError(async (_req, res, next) => {
  const { query } = res.locals;

  const flag = await flagService.createFlag({
    name: query.name,
    description: query.description,
    color: query.color
  });

  if (!flag) {
    return next(
      new ApiError(HttpCodes.Conflict).setInfo(
        `A flag with name \`${query.name}\` already exists`
      )
    );
  }

  const data = new ApiResponseJson()
    .set("id", flag.id)
    .set("name", flag.name)
    .set("description", flag.description)
    .set("color", flag.color)
    .set("created_at", flag.createdAt.toISOString());

  return new ApiResponse(HttpCodes.Ok, res).setData(data).send();
});
