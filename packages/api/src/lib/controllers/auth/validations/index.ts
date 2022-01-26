import joi from "joi";

export const callbackSchema = {
  query: joi
    .object()
    .keys({
      code: joi.string(),
      error: joi.string()
    })
    .or("code", "error")
};
