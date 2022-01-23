import { Request, Response, NextFunction } from "express";

/**
 * Catches a server error
 * @param promiseFunc The promise to catch
 */
export const catchServerError = (promiseFunc: PromiseFunc) => {
  /**
   * @param req The request
   * @param res The response
   * @param next The next function
   */
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
