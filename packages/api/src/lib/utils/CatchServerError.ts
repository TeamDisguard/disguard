import { Request, Response, NextFunction } from "express";

/**
 * Catch a server error
 * @param promiseFunc The promise to catch
 */
export const catchServerError = (promiseFunc: PromiseFunc) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      return await promiseFunc(req, res, next);
    } catch (err) {
      return next(err);
    }
  };
};

export type PromiseFunc = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void>;
