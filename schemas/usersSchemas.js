const Joi = require("joi");

const registerSchemas = Joi.object({
  subscription: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().min(6).required(),
});

const loginSchemas = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().min(6).required(),
});

module.exports = {
  registerSchemas,
  loginSchemas,
};
