const query = require("../db/queries/dinerQueries");
const asyncHandler = require("express-async-handler");

const getDiners = asyncHandler(async (req, res, next) => {
  try {
    const diner = await query.getAllDiners();
    res.send(diner);
  } catch (error) {
    return next(error);
  }
});

const getDinerByName = asyncHandler(async (req, res, next) => {
  const name = req.body.name;
  const diner = await query.getDinerByName(name);
  res.send(diner);
  return;
});

const addMealToLikes = asyncHandler(async (req, res, next) => {
  const dinerId = req.body.dinerId;
  const mealId = req.body.mealId;
  await query.addMealToLikes(dinerId, mealId);
  res.send("Done");
  return;
});

const addMealToDislikes = asyncHandler(async (req, res, next) => {
  const dinerId = req.body.dinerId;
  const mealId = req.body.mealId;
  await query.addMealToDislikes(dinerId, mealId);
  res.send("Done");
  return;
});

const addMealsToDislikes = asyncHandler(async (req, res, next) => {
  const dinerId = req.body.formData.dinerId;
  const mealIdArray = req.body.formData.mealIdArray;
  console.log(mealIdArray);
  await query.addMealsToDislikes(dinerId, mealIdArray);
  res.send("Done");
  return;
});

module.exports = {
  getDiners,
  getDinerByName,
  addMealToLikes,
  addMealToDislikes,
  addMealsToDislikes,
};
