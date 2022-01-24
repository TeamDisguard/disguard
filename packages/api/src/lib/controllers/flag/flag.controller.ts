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

export const getFlag = catchServerError(async (req, res, next) => {
  const { flagId } = req.params;

  const flag = await flagService.getFlag(flagId);
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

export const updateFlag = catchServerError(async (req, res, next) => {
  const { flagId } = req.params;
  const { query } = res.locals;

  const isUpdated = await flagService.updateFlag({
    id: flagId,
    name: query.name,
    description: query.description,
    color: query.color
  });

  if (!isUpdated) {
    return next(new ApiError(HttpCodes.NotFound).setInfo("Flag was not found."));
  }

  return new ApiResponse(HttpCodes.NoContent, res).send();
});

export const deleteFlag = catchServerError(async (req, res, next) => {
  const { flagId } = req.params;

  const isDeleted = await flagService.deleteFlag(flagId);

  if (!isDeleted) {
    return next(new ApiError(HttpCodes.NotFound).setInfo("Flag was not found."));
  }

  return new ApiResponse(HttpCodes.NoContent, res).send();
});
