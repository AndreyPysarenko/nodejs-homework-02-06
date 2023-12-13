const express = require("express");
const { validationBody, authenticate } = require("../../middlewares");
const schemas = require("../../schemas/usersSchemas");
const authController = require("../../controllers/authController");

const router = express.Router();

router.post(
  "/register",
  validationBody(schemas.registerSchemas),
  authController.register
);
router.post(
  "/login",
  validationBody(schemas.loginSchemas),
  authController.login
);
router.get("/current", authenticate, authController.getCurrent);
router.post("/logout", authenticate, authController.logout);

module.exports = router;
