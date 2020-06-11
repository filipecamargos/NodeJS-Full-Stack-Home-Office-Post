//Export express
const express = require('express');

//Instantiate to use the functionalities
const router = express.Router();

//Get the controllers
const pageController = require("../controllers/appController");

/***************************************
 * Commum Roters for the Page
 ***************************************/
//Main Get Routes for Home | Login | SignUp
router.get('/', pageController.home);

module.exports = router;