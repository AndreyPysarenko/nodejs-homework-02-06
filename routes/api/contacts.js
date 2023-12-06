const express = require("express");
const contactsController = require("../../controllers/contactsController");
const {
  isValidateId,
  validationBody,
  validationBodyFavorite,
} = require("../../middlewares");
const schemas = require("../../schemas/contactsSchemas");

const router = express.Router();

router.get("/", contactsController.getAll);

router.get("/:contactId", isValidateId, contactsController.getById);

router.post(
  "/",
  validationBody(schemas.addContactsSchemas),
  contactsController.add
);

router.delete("/:contactId", isValidateId, contactsController.deleteById);

router.put(
  "/:contactId",
  isValidateId,
  validationBody(schemas.addContactsSchemas),
  contactsController.updateById
);

router.patch(
  "/:contactId/favorite",
  isValidateId,
  validationBodyFavorite(schemas.contactUpdateFavoriteSchema),
  contactsController.updateStatusContact
);

module.exports = router;
