const Joi = require("joi");
const emailRegexp =
  /^[a-zA-Z0-9_.+]+(?<!^[0-9]*)@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

const registerSchemas = Joi.object({
  subscription: Joi.string(),
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

const loginSchemas = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

const emailSchemas = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
});

module.exports = {
  registerSchemas,
  loginSchemas,
  emailSchemas,
};
