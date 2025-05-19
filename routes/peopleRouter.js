const { Router } = require("express");
const peopleRouter = Router();
const peopleController = require('../controllers/peopleController')



peopleRouter.get("/", peopleController.getPeople)


module.exports = peopleRouter;