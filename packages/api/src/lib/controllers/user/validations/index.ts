import joi from "joi";

export const userSearchSchema = joi.object({
  query: joi.string().min(2).max(34).trim().required(),
  limit: joi.number().min(1).max(100).default(5)
});
