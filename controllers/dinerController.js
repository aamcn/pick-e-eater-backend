const query = require("../db/queries/dinerQueries");
const asyncHandler = require("express-async-handler");

// Get all diners.
const getDiners = asyncHandler(async (req, res, next) => {
  try {
    const diners = await query.getAllDiners();
    // If no diners found, return 404 error.
    if (!diners || diners.length === 0) {
      res.status(404).send("Diner not found");
      return;
    }
    // Return the list of diners.
    res.send(diners);
  } catch (error) {
    return next(error);
  }
});

// Get a diner by name.
const getDinerByName = asyncHandler(async (req, res, next) => {
  const name = req.body.name;

  try {
    const diner = await query.getDinerByName(name);
    // If no diner found, return 404 error.
    if (!diner) {
      res.status(404).send("Diner not found");
      return;
    }
    // Return the diner.
    res.send(diner);
  } catch (error) {
    return next(error);
  }
});

// Add a meal to a diner's liked meals.
const addMealToLikes = asyncHandler(async (req, res, next) => {
  const dinerId = req.body.dinerId;
  const mealId = req.body.mealId;
  try {
    await query.addMealToLikes(dinerId, mealId);

    res.send("Done");
  } catch (error) {
    return next(error);
  }
});

// Add a meal to a diner's disliked meals.
const addMealToDislikes = asyncHandler(async (req, res, next) => {
  const dinerId = req.body.dinerId;
  const mealId = req.body.mealId;

  try {
    await query.addMealToDislikes(dinerId, mealId);

    res.send("Done");
  } catch (error) {
    return next(error);
  }
});

// Add a single or multiple meals to a diner's disliked meals.
const addMealsToDislikes = asyncHandler(async (req, res, next) => {
  const dinerId = req.body.formData.dinerId;
  const mealIdArray = req.body.formData.mealIdArray;
  try {
    await query.addMealsToDislikes(dinerId, mealIdArray);

    res.send("Done");
  } catch (error) {
    return next(error);
  }
});

module.exports = {
  getDiners,
  getDinerByName,
  addMealToLikes,
  addMealToDislikes,
  addMealsToDislikes,
};
