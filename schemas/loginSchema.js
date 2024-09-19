const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
  token: Joi.string(),
})

module.exports = loginSchema;
