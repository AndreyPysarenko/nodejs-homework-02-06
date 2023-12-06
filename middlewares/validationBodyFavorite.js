const { HttpError } = require("../helpers");

const validationBodyFavorite = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    const contacts = Object.keys(req.body);

    if (contacts.length === 0) {
      return next(HttpError(400, "Missing field favorite"));
    }

    if (error) {
      next(HttpError(400, error.message));
    }

    next();
  };
  return func;
};

module.exports = validationBodyFavorite;
