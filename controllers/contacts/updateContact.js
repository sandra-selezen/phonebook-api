const { Contact } = require('../../models');
const { HttpError } = require('../../helpers');
const { addSchema } = require('../../schemas');

const updateContact = async (req, res) => {
  const { error } = addSchema.validate(req.body);
  if (error) {
    throw HttpError(400, 'Missing fields');
  }
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, { new: true });
  if (!result) {
    throw HttpError(404, 'Not found');
  }
  res.json(result);
}

module.exports = updateContact;
