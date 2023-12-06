const Joi = require("joi");

const addContactsSchemas = Joi.object({
  name: Joi.string().min(3).max(30).required().messages({
    "any.required": "Missing required name field",
  }),
  email: Joi.string().required().messages({
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
