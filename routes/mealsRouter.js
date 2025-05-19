const { Router } = require("express");
const mealsRouter = Router();
const mealsController = require('../controllers/mealsController')



mealsRouter.get("/", mealsController.getMeals)


module.exports = mealsRouter;