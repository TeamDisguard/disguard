import { HttpCodes, snowflakeRegex } from "#consts";
import { ApiError } from "#lib";
import joi from "joi";

export const getUserSchema = {
  params: joi.object().keys({
    userId: joi.string().pattern(snowflakeRegex).error(
      // eslint-disable-next-line prettier/prettier
      new ApiError(HttpCodes.BadRequest).setInfo("\"user_id\" must be a snowflake")
    )
  })
};

export const userSearchSchema = {
  query: joi.object().keys({
    query: joi.string().min(2).max(34).trim().required(),
    limit: joi.number().min(1).max(100).default(5)
  })
};
