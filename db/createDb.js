require("dotenv").config();
const { Client } = require("pg");

const SQL = `
CREATE DATABASE pick_e_eater;
`

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `${process.env.DBSTRING}`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();