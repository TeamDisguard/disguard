import { Request, Response, NextFunction } from "express";
import joi, { ObjectSchema } from "joi";
import { ApiError } from "#lib";
import { HttpCodes } from "#consts";

export const validate = (schema: ObjectSchema) => {
  /**
   * @param req The request
   * @param res The response
   * @param next The next function
   */
  return async (req: Request, res: Response, next: NextFunction) => {
    const { value, error } = joi
      .compile(schema)
      .prefs({ errors: { label: "key" } })
      .validate(req.query);

    if (error) {
      return next(new ApiError(HttpCodes.BadRequest).setInfo(error.details[0].message));
    }

    res.locals.query = value;

    return next();
  };
};
