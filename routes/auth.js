//Export express
const express = require('express');

//Instantiate to use the functionalities
const router = express.Router();

//Get the controllers
const authController = require("../controllers/authController");

/***************************************
 * Routers for the Authentication
 ***************************************/
//Main Get Routes for Login | SignUp
router.get('/login', authController.getLogin);
router.get('/signup', authController.getSignUp);


//POST Routes for Login | SignUp
router.post('/login', authController.postLogin);
router.post('/signup', authController.postSingUp);

module.exports = router;