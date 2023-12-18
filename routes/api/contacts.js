const express = require("express");
const contactsController = require("../../controllers/contactsController");
const {
  isValidateId,
  validationBody,
  authenticate,
} = require("../../middlewares");
const schemas = require("../../schemas/contactsSchemas");

const router = express.Router();

router.get("/", authenticate, contactsController.getAll);

router.get(
  "/:contactId",
  authenticate,
  isValidateId,
  contactsController.getById
);

router.post(
  "/",
  authenticate,
  validationBody(schemas.addContactsSchemas),
  contactsController.add
);

router.delete(
  "/:contactId",
  authenticate,
  isValidateId,
  contactsController.deleteById
);

router.put(
  "/:contactId",
  authenticate,
  isValidateId,
  validationBody(schemas.addContactsSchemas),
  contactsController.updateById
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidateId,
  validationBody(schemas.contactUpdateFavoriteSchema),
  contactsController.updateStatusContact
);

module.exports = router;
