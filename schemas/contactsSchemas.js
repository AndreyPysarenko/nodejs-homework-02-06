const Joi = require("joi");
const emailRegexp =
  /^[a-zA-Z0-9_.+]+(?<!^[0-9]*)@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

const addContactsSchemas = Joi.object({
  name: Joi.string().min(3).max(30).required().messages({
    "any.required": "Missing required name field",
  }),
  email: Joi.string().pattern(emailRegexp).required().messages({
    "any.required": "Missing required email field",
  }),
  phone: Joi.string().required().messages({
    "any.required": "Missing required phone field",
  }),
  favorite: Joi.boolean(),
});

const contactUpdateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

module.exports = { addContactsSchemas, contactUpdateFavoriteSchema };
