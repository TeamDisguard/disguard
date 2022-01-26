import joi from "joi";

const nameRegex = /^\w[\w\s]*$/;

export const createFlagSchema = {
  query: joi.object().keys({
    name: joi.string().pattern(nameRegex).min(3).max(128).required().trim(),
    description: joi.string().min(3).max(255).required().trim(),
    color: joi.number().integer().min(0x000000).max(0xffffff).required()
  })
};

export const updateFlagSchema = {
  query: joi.object().keys({
    name: joi.string().pattern(nameRegex).min(3).max(128).trim(),
    description: joi.string().min(3).max(255).trim(),
    color: joi.number().integer().min(0x000000).max(0xffffff)
  })
};
