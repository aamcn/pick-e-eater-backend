const { Pool } = require("pg");

module.exports = new Pool({
    host: process.env.POOLHOST , // or wherever the db is hosted
    user: process.env.POOLUSER ,
    database: process.env.POOLDB ,
    password: process.env.POOLPASSWORD ,
    port: process.env.POOLPORT
  });