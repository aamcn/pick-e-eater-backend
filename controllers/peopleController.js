const query = require("../db/queries/peopleQueries")
const asyncHandler = require('express-async-handler')

const getPeople = asyncHandler(async(req , res, next) => {
  const people = await query.getAllPeople()
  res.send(people)
  return
})

const getPersonByName = asyncHandler(async(req , res, next) => {
  // const name = req.body.name
  const name = 'Tony'
  const people = await query.getPersonByName(name)
  res.send(people)
  return
})

const addMealToLikes = asyncHandler(async(req , res, next) => {
  // const name = req.body.name
  const personId = '1'
  const mealId = '4'
  await query.addMealToLikes(personId, mealId)
  res.send('Done')
  return
})



module.exports = {getPeople, getPersonByName, addMealToLikes} 