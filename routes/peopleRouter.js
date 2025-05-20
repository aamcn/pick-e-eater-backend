const { Router } = require("express");
const peopleRouter = Router();
const peopleController = require('../controllers/peopleController')



peopleRouter.get("/", peopleController.getPeople)
peopleRouter.get("/by-name", peopleController.getPersonByName)


module.exports = peopleRouter;