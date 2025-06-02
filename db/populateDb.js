#! /usr/bin/env node

require("dotenv").config();
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS diner (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR ( 255 ),
  likes INTEGER[],
  dislikes INTEGER[]
);

INSERT INTO diner (name, likes, dislikes) 
VALUES ('Elle', '{"1"}', '{"6"}'), ('Elliot', '{"1"}', '{"5"}'), ('Fiona', '{"1"}', '{"5"}'), ('Liam', '{"5"}', '{"6"}'), ('Natasha', '{"1"}', '{"4"}'), ('Aaron', '{"1"}', '{"5","3"}');

CREATE TABLE IF NOT EXISTS meals (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR ( 255 ),
  type VARCHAR ( 255 ),
  sub_type VARCHAR ( 255 ),
  difficulty VARCHAR ( 255 )
);

INSERT INTO meals (name, type, sub_type, difficulty) 
VALUES ('Kebab', 'Take Away', 'Turkish', 'Easy'), ('Curry', 'Take Away', 'South Asian', 'Easy'), ('Roast Dinner', 'Hearty', 'Family', 'Hard'), ('Borger', 'Fast Food', 'American', 'Easy'), ('Lasagne', 'Pasta', 'Italian', 'Moderate'), ('Chicken Salad', 'Salad', 'Healthy', 'Easy');

`



async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DATABSE_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();