const ctrlWrapper = (wrapper) => {
  const func = async (req, res, next) => {
    try {
      await wrapper(req, res, next);
    } catch (error) {
      next(error);
    }
  };

  return func;
};

module.exports = ctrlWrapper;
