const { Pool } = require("pg");

module.exports = new Pool({
  connectionString: process.env.DATABSE_URL
});

