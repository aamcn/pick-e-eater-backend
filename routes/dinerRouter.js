const { Router } = require("express");
const dinerRouter = Router();
const dinerController = require("../controllers/dinerController");

// GET routes
dinerRouter.get("/", dinerController.getDiners);
dinerRouter.get("/by-name", dinerController.getDinerByName);

// POST routes
dinerRouter.post("/add-meal-to-likes", dinerController.addMealToLikes);
dinerRouter.post("/add-meal-to-dislikes", dinerController.addMealToDislikes);
dinerRouter.post("/add-meals-to-dislikes", dinerController.addMealsToDislikes);

module.exports = dinerRouter;
