import {
  ApiResponse,
  ApiError,
  ApiResponseJson,
  flagService,
  catchServerError
} from "#lib";

import { HttpCodes } from "#consts";

export const getFlag = catchServerError(async (_req, res, next) => {
  const { flagId } = res.locals.params;

  const flag = await flagService.getFlagById(flagId);
  if (!flag) return next(new ApiError(HttpCodes.NotFound).setInfo("Flag was not found."));

  const data = new ApiResponseJson()
    .set("id", flag.id)
    .set("name", flag.name)
    .set("description", flag.description)
    .set("color", flag.color)
    .set("created_at", flag.createdAt.toISOString());

  return new ApiResponse(HttpCodes.Ok, res).setData(data).send();
});

export const getFlags = catchServerError(async (_req, res) => {
  const flags = await flagService.getFlags();

  const data = flags.map((flag) => ({
    id: flag.id,
    name: flag.name,
    description: flag.description,
    color: flag.color,
    created_at: flag.createdAt.toISOString()
  }));

  return new ApiResponse(HttpCodes.Ok, res).setData(data).send();
});

export const createFlag = catchServerError(async (_req, res, next) => {
  const { name, description, color } = res.locals.query;

  const flag = await flagService.createFlag({ name, description, color });

  if (!flag) {
    return next(
      new ApiError(HttpCodes.Conflict).setInfo(
        `A flag with name \`${name}\` already exists`
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

export const updateFlag = catchServerError(async (_req, res, next) => {
  const { flagId: id } = res.locals.params;
  const { name, description, color } = res.locals.query;

  const isUpdated = await flagService.updateFlag({ id, name, description, color });

  if (isUpdated === null) {
    return next(new ApiError(HttpCodes.NotFound).setInfo("Flag was not found."));
  }

  if (isUpdated === undefined) {
    return next(
      new ApiError(HttpCodes.Conflict).setInfo(
        `A flag with name \`${name}\` already exists`
      )
    );
  }

  return new ApiResponse(HttpCodes.NoContent, res).send();
});

export const deleteFlag = catchServerError(async (_req, res, next) => {
  const { flagId } = res.locals.params;

  const isDeleted = await flagService.deleteFlag(flagId);

  if (!isDeleted) {
    return next(new ApiError(HttpCodes.NotFound).setInfo("Flag was not found."));
  }

  return new ApiResponse(HttpCodes.NoContent, res).send();
});
