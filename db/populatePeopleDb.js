#! /usr/bin/env node

require("dotenv").config();
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS people (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR ( 255 ),
  likes INTEGER[],
  dislikes INTEGER[]
);

INSERT INTO people (name, likes, dislikes) 
VALUES ('Tony', '{"1"}', '{"2"}');
`

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `${process.env.URLSTRING}`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();