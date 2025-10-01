const query = require("../db/queries/mealsQueries");
const asyncHandler = require("express-async-handler");

// Get all meals.
const getAllMeals = asyncHandler(async (req, res, next) => {
  const meals = await query.getAllMeals();
  try {
    // If no meals found, return 404 error.
    if (!meals || meals.length === 0) {
      res.status(404).send("Meals not found");
      return;
    }
    // Return the list of meals.
    res.send(meals);
  } catch (error) {
    return next(error);
  }
});

// Get a meal by ID.
const getMealById = asyncHandler(async (req, res, next) => {
  const mealId = req.body.mealId;
  try {
    const meals = await query.getMealById(mealId);

    // If no meals found, return 404 error.
    if (!meals || meals.length === 0) {
      res.status(404).send("Meals not found");
      return;
    }
    // Return the list of meals.
    res.send(meals);
  } catch (error) {
    return next(error);
  }
});

// Get meals by type.
const getMealsByType = asyncHandler(async (req, res, next) => {
  const mealType = req.body.mealType;
  try {
    const meals = await query.getMealsByType(mealType);
    // If no meals found, return 404 error.
    if (!meals || meals.length === 0) {
      res.status(404).send("Meals not found");
      return;
    }
    // Return the list of meals.
    res.send(meals);
  } catch (error) {
    return next(error);
  }
});

// Get meals by subType.
const getMealsBySubType = asyncHandler(async (req, res, next) => {
  const mealSubType = req.body.mealSubType;
  try {
    const meals = await query.getMealsBySubType(mealSubType);
    // If no meals found, return 404 error.
    if (!meals || meals.length === 0) {
      res.status(404).send("Meals not found");
      return;
    }
    // Return the list of meals.
    res.send(meals);
  } catch (error) {
    return next(error);
  }
});

// Get meals by difficulty.
const getMealsByDifficulty = asyncHandler(async (req, res, next) => {
  const mealDifficulty = req.body.mealDifficulty;
  try {
    const meals = await query.getMealsByDifficulty(mealDifficulty);
    // If no meals found, return 404 error.
    if (!meals || meals.length === 0) {
      res.status(404).send("Meals not found");
      return;
    }
    // Return the list of meals.
    res.send(meals);
  } catch (error) {
    return next(error);
  }
});

// Add a new meal.
const addNewMeal = asyncHandler(async (req, res, next) => {
  const name = req.body.formData.name;
  const type = req.body.formData.type;
  const subType = req.body.formData.subType;
  const difficulty = req.body.formData.difficulty;

  try {
    // Add the new meal to the database.
    await query.addNewMeal(name, type, subType, difficulty);

    // Return success message.
    res.send("Added");
  } catch (error) {
    return next(error);
  }
});

module.exports = {
  getAllMeals,
  getMealById,
  getMealsByType,
  getMealsBySubType,
  getMealsByDifficulty,
  addNewMeal,
};
