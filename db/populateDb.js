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

CREATE TABLE IF NOT EXISTS meals (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR ( 255 ),
  type VARCHAR ( 255 ),
  sub_type VARCHAR ( 255 ),
  difficulty VARCHAR ( 255 )
);

INSERT INTO meals (name, type, sub_type, difficulty) 
VALUES ('Borger', 'Fast Food', 'American', 'Easy');

INSERT INTO meals (name, type, sub_type, difficulty) 
VALUES ('Lasagne', 'Pasta', 'Italian', 'Moderate');

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