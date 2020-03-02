const config = require("dotenv-safe").config({
  example: "./.env",
  allowEmptyValues: true
});

module.exports = { config };
