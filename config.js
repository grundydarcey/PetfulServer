require('dotenv').config();

module.exports = {
  CLIENT_ORIGIN: process.env.CLIENT_ORIGIN || 'https://petful-client-template-grundydarcey.vercel.app',
  PORT: process.env.PORT || 8000,
};