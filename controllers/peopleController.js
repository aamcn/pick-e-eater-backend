const query = require("../db/queries/peopleQueries")

async function getPeople(req , res, next) {
  const people = await query.getAllPeople()
  res.send(people)
  return
}

module.exports = {getPeople}