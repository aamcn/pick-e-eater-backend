const { Router } = require("express");
const mealsRouter = Router();
const mealsController = require('../controllers/mealsController')



mealsRouter.get("/", mealsController.getAllMeals)
mealsRouter.get("/by-id", mealsController.getMealById)
mealsRouter.get("/by-type", mealsController.getMealsByType)
mealsRouter.get("/by-subtype", mealsController.getMealsBySubType)

module.exports = mealsRouter;