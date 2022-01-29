import { HttpCodes, snowflakeRegex } from "#consts";
import { ApiError } from "#lib";
import joi from "joi";

const nameRegex = /^\w[\w\s]*$/;

export const getFlagSchema = {
  params: joi.object().keys({
    flagId: joi
      .string()
      .pattern(snowflakeRegex)
      // eslint-disable-next-line prettier/prettier
      .error(new ApiError(HttpCodes.BadRequest).setInfo("\"flag_id\" must be a snowflake"))
      .required()
  })
};

export const createFlagSchema = {
  query: joi.object().keys({
    name: joi.string().pattern(nameRegex).min(3).max(128).required().trim(),
    description: joi.string().min(3).max(255).required().trim(),
    color: joi.number().integer().min(0x000000).max(0xffffff).required()
  })
};

export const updateFlagSchema = {
  params: joi.object().keys({
    flagId: joi
      .string()
      .pattern(snowflakeRegex)
      // eslint-disable-next-line prettier/prettier
      .error(new ApiError(HttpCodes.BadRequest).setInfo("\"flag_id\" must be a snowflake"))
      .required()
  }),
  query: joi.object().keys({
    name: joi.string().pattern(nameRegex).min(3).max(128).trim(),
    description: joi.string().min(3).max(255).trim(),
    color: joi.number().integer().min(0x000000).max(0xffffff)
  })
};

export const deleteFlagSchema = {
  params: joi.object().keys({
    flagId: joi
      .string()
      .pattern(snowflakeRegex)
      // eslint-disable-next-line prettier/prettier
      .error(new ApiError(HttpCodes.BadRequest).setInfo("\"flag_id\" must be a snowflake"))
      .required()
  })
};
