const { Router } = require("express");
const peopleRouter = Router();
const peopleController = require('../controllers/peopleController')



peopleRouter.get("/", peopleController.getPeople)
peopleRouter.get("/by-name", peopleController.getPersonByName)

peopleRouter.post("/add-meal-to-likes", peopleController.addMealToLikes)
module.exports = peopleRouter;