const { HttpError } = require("../helpers");

const validationBody = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    const contacts = Object.keys(req.body);

    if (req.method === 'PATCH' && contacts.length === 0) {
      return next(HttpError(400, "Missing field favorite"));
    } else {
      if (contacts.length === 0) {
        return next(HttpError(400, "Missing fields"));
      }
    }

    if (error) {
      next(HttpError(400, error.message));
    }

    next();
  };
  return func;
};

module.exports = validationBody;
