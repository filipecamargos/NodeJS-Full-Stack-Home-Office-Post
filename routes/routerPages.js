//Export express
const express = require('express');

//Instantiate to use the functionalities
const router = express.Router();

//Get the controllers
const pageController = require("../controllers/appController");

//Require the Authentication Meddleware
const auth = require('../middleware/is-auth');

/***************************************
 * Commum Roters for the Page
 ***************************************/
//Home Router
router.get('/', pageController.home);

//Joab Board Router
router.get('/jobboard', auth, pageController.jobBoard);

module.exports = router;