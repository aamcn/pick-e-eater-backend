const { Router } = require("express");
const dinerRouter = Router();
const dinerController = require("../controllers/dinerController");

dinerRouter.get("/", dinerController.getDiners);
dinerRouter.get("/by-name", dinerController.getDinerByName);

dinerRouter.post("/add-meal-to-likes", dinerController.addMealToLikes);
dinerRouter.post("/add-meal-to-dislikes", dinerController.addMealToDislikes);

module.exports = dinerRouter;
