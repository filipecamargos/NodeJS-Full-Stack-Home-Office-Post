const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const { validationResult } = require('express-validator/check');

const User = require('../models/user');

/*************************************************
 * GET CONTROLER FOR LOGIN | SING UP
 * ***********************************************/
//This controller will handle the GET Login Page
exports.getLogin = (req, res, next) => {
    console.log("tests")
    res.render('auth/login', {
        title: 'HOME OFFICE POST | Login',
        home: false,
        login: true,
        singUp: false,
    });
};

//This controller will handle the GET Sing Up page
exports.getSignUp = (req, res, next) => {
    let message = req.flash('error');
    if (message.length > 0) {
        message = message[0];
    } else {
        message = null;
    }
    res.render('auth/signup', {
        title: 'HOME OFFICE POST | Sign Up',
        home: false,
        login: false,
        singUp: true,
        errorMessage: message,
        oldInput: {
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationErrors: []
    });
};

/*************************************************
 * POST CONTROLER FOR LOGIN | SING UP
 * ***********************************************/
//This controller will handle the POST Login Page
exports.postSignUp = (req, res, next) => {
    //User Information
    const email = req.body.email;
    const password = req.body.password;

    //Check for errors set in the router
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors.array());
        return res.status(422).render('auth/signup', {
            title: 'HOME OFFICE POST | Sign Up',
            home: false,
            login: false,
            singUp: true,
            errorMessage: errors.array()[0].msg,
            oldInput: {
                email: email,
                password: password,
                confirmPassword: req.body.confirmPassword
            },
            validationErrors: errors.array()
        });
    };

    //Incrypt the password
    bcrypt
        .hash(password, 12)
        .then(hashedPassword => {
            const user = new User({
                email: email,
                password: hashedPassword,
                preferedJobs: { jobs: [] }
            });
            return user.save();
        })
        .then(result => {
            res.redirect('/login');
        })
        .catch(err => {
            const error = new Error(err);
            error.httpStatusCode = 500;
            return next(error);
        });
};
//This controller will handle the POST Login Page
exports.postLogin = (req, res, next) => {
    res.redirect('/')
};