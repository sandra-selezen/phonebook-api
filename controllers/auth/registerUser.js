const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { SECRET_KEY } = process.env;

const { User } = require('../../models');
const { HttpError } = require('../../helpers');

const registerUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(409, 'Email in use');
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({ ...req.body, password: hashPassword });

  const userId = newUser._id;

  const payload = {
    id: userId,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '23h' });

  newUser.token = token;
  await newUser.save();

  res.status(201).json({
    token,
    user: {
      name: newUser.name,
      email: newUser.email,
    }
  });
}

module.exports = registerUser;
