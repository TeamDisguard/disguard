import { Request, Response, NextFunction } from "express";
import joi, { ObjectSchema } from "joi";
import { ApiError } from "#lib";
import { HttpCodes } from "#consts";

export type RequestKey = keyof Request;

/**
 * Extract the keys the schema keys from the request
 * @param req The request
 * @param schemaKeys The schema keys
 */
export const extractRequestSchemaKeys = (req: Request, schemaKeys: RequestKey[]) => {
  return schemaKeys.reduce((pickedObj, schemaKey) => {
    if (Reflect.has(req, schemaKey)) {
      pickedObj[schemaKey] = req[schemaKey];
    }

    return pickedObj;
  }, {} as Record<keyof Request, unknown>);
};

/**
 * Validates params using a schema
 * @param schema The validation schema
 */
export const validate = (schema: Record<string, ObjectSchema>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const schemaKeys = Reflect.ownKeys(schema) as RequestKey[];
    const validationObject = extractRequestSchemaKeys(req, schemaKeys);

    const { value, error } = joi
      .compile(schema)
      .prefs({ errors: { label: "key" } })
      .validate(validationObject);

    if (error) {
      const info = error.details?.[0].message;
      return next(info ? new ApiError(HttpCodes.BadRequest).setInfo(info) : error);
    }

    res.locals = { ...res.locals, ...value };

    return next();
  };
};
