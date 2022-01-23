import type { NextFunction, Request, Response } from "express";
import { ApiError, Logger } from "#lib";
import { HttpCodes } from "#consts";

/**
 * Converts an error into an ApiError
 * @param err The error to convert
 * @param _req The request
 * @param _res The response
 * @param next The next function
 */
export const convertError = (
  err: Error,
  _req: Request,
  _res: Response,
  next: NextFunction
): void => {
  let error: ApiError;

  if (err instanceof ApiError) {
    error = err;
  } else {
    error = new ApiError(HttpCodes.InternalServerError, err.stack);
    Logger.error(error);
  }

  next(error);
};

/**
 * Handles an error
 * @param err The error to handle
 * @param _req The request
 * @param res The response
 * @param next The next function
 */
export const handleError = (
  err: ApiError,
  _req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction
): void => {
  const status = err.status;
  const response = err.toJSON();
  res.status(status).json(response);
};
