const query = require("../db/queries/peopleQueries")
const asyncHandler = require('express-async-handler')

const getPeople = asyncHandler(async(req , res, next) => {
  const people = await query.getAllPeople()
  res.send(people)
  return
})

module.exports = {getPeople}