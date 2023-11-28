const contacts = require("../models/contacts");
const { HttpError, ctrlWrapper } = require("../helpers");

const getAll = async (req, res) => {
  const result = await contacts.listContacts();
  res.json({
    status: 200,
    message: "Successfully retrieved contacts",
    data: result,
  });
};

const getById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contacts.getContactById(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json({
    status: 200,
    message: "Successfully retrieved contact",
    data: result,
  });
};

const add = async (req, res) => {
  const newContact = req.body;
  const result = await contacts.addContact(newContact);
  res.json({
    status: 201,
    message: "Successfully created an contact",
    data: result,
  });
};

const deleteById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contacts.removeContact(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json({
    status: 200,
    message: "Contact deleted",
  });
};

const updateById = async (req, res) => {
  const body = req.body;
  const { contactId } = req.params;
  const result = await contacts.updateContact(contactId, body);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json({
    status: 200,
    message: "Successfully updated an contact",
    data: result,
  });
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  deleteById: ctrlWrapper(deleteById),
  updateById: ctrlWrapper(updateById),
};
