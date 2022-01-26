import { HttpCodes, snowflakeRegex } from "#consts";
import { ApiError } from "#lib";
import joi from "joi";

export const deleteSessionSchema = {
  params: joi.object().keys({
    sessionId: joi.string().pattern(snowflakeRegex).error(
      // eslint-disable-next-line prettier/prettier
      new ApiError(HttpCodes.BadRequest).setInfo("\"session_id\" must be a snowflake")
    )
  })
};
