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
  // const mealId = req.body.mealType
  const mealType = 'Fast Food'
  const meals = await query.getMealsByType(mealType)
  res.send(meals)
  return
})


module.exports = {
  getAllMeals,
  getMealById,
  getMealsByType
}