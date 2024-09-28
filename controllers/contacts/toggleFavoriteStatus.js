const { Contact } = require('../../models');
const { HttpError } = require('../../helpers');

const toggleFavoriteStatus = async (req, res) => {
  const { contactId } = req.params;

  const contact = await Contact.findById(contactId).exec();

  if (!contact) {
    throw HttpError(404, 'Not found');
  }

  contact.favorite = !contact.favorite;

  const result = await contact.save();

  res.json(result);
};

module.exports = toggleFavoriteStatus;
