const express = require("express");
const contactsController = require("../../controllers/contactsController");
const { validationBody } = require("../../middlewares");
const schemas = require("../../schemas/contactsSchemas");

const router = express.Router();

router.get("/", contactsController.getAll);

router.get("/:contactId", contactsController.getById);

router.post(
  "/",
  validationBody(schemas.contactsSchemas),
  contactsController.add
);

router.delete("/:contactId", contactsController.deleteById);

router.put(
  "/:contactId",
  validationBody(schemas.contactsSchemas),
  contactsController.updateById
);

module.exports = router;
