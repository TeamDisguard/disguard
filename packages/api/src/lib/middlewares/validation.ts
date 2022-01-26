import { Request, Response, NextFunction } from "express";
import joi, { ObjectSchema } from "joi";
import { ApiError } from "#lib";
import { HttpCodes } from "#consts";

/**
 * Validates params using a schema
 * @param schema The validation schema
 */
export const validate = (schema: ObjectSchema) => {
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
