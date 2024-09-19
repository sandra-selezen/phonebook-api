const getAllContacts = require('./getAllContacts');
const getContactById = require('./getContactById');
const addContact = require('./addContact');
const updateContact = require('./updateContact');
const updateStatusContact = require('./updateStatusContact');
const deleteContact = require('./deleteContact');

module.exports = {
  getAllContacts,
  getContactById,
  addContact,
  updateContact,
  updateStatusContact,
  deleteContact,
}
