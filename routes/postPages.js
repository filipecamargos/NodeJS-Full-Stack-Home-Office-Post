//Export express
const express = require('express');

//Instantiate to use the functionalities
const router = express.Router();

//Get the controllers
const pageController = require("../controllers/appConstrollers");

//Main Get Routes for Home | Login | SignUp
router.get('/', pageController.home);
router.get('/login', pageController.getLogin);
router.get('/signup', pageController.getSignUp);


//POST Routes for Login | SignUp
router.post('/login', pageController.postLogin);
router.post('/signup', pageController.postSingUp);

module.exports = router;