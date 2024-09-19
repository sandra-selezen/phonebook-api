const Joi = require('joi');

const addSchema = Joi.object({
  name: Joi.string().required(),
  phone_number: Joi.string().required(),
  favorite: Joi.boolean(),
});

module.exports = addSchema;
