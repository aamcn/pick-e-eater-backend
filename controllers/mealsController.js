const query = require("../db/queries/mealsQueries")

async function getMeals(req , res, next) {
  const meals = await query.getAllMeals()
  res.send(meals)
  return
}

module.exports = {getMeals}