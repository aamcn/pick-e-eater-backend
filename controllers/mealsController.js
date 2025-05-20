const query = require("../db/queries/mealsQueries")
const asyncHandler = require('express-async-handler')

const getAllMeals = asyncHandler(async(req , res, next) => {
  const meals = await query.getAllMeals()
  res.send(meals)
  return
})

const getMealById= asyncHandler(async(req , res, next) => {
  // const mealId = req.body.mealId
  const mealId = '2'
  const meals = await query.getMealById(mealId)
  res.send(meals)
  return
})

const getMealsByType = asyncHandler(async(req , res, next) => {
  // const mealType = req.body.mealType
  const mealType = 'Fast Food'
  const meals = await query.getMealsByType(mealType)
  res.send(meals)
  return
})

const getMealsBySubType = asyncHandler(async(req , res, next) => {
  // const mealSubType = req.body.mealSubType
  const mealSubType = 'Italian'
  const meals = await query.getMealsBySubType(mealSubType)
  res.send(meals)
  return
})

const getMealsByDifficulty = asyncHandler(async(req , res, next) => {
  // const mealdifficulty = req.body.mealdifficulty
  const mealDifficulty = 'Moderate'
  const meals = await query.getMealsByDifficulty(mealDifficulty)
  res.send(meals)
  return
})

const addNewMeal = asyncHandler(async(req , res, next) => {
  // const name = req.body.name
  // const type = req.body.type
  // const subType= req.body.subType
  // const difficulty = req.body.difficulty
  const name = 'Souffle'
  const type = 'Fancy'
  const subType= 'Restaurant'
  const difficulty = 'Hard'
  await query.addNewMeal(name, type, subType, difficulty)
  res.send('Added')
  return
})

module.exports = {
  getAllMeals,
  getMealById,
  getMealsByType,
  getMealsBySubType,
  getMealsByDifficulty,
  addNewMeal
}