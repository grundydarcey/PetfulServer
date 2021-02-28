require('dotenv').config();

module.exports = {
  // CLIENT_ORIGIN: process.env.CLIENT_ORIGIN || 'https://fast-wildwood-90277.herokuapp.com/api/',
  CLIENT_ORIGIN: process.env.CLIENT_ORIGIN || 'http://localhost:3000',
  PORT: process.env.PORT || 8000,
};