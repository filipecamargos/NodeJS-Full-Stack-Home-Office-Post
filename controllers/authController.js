const bcrypt = require('bcryptjs');


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
    console.log("tests")
    res.render('auth/signup', {
        title: 'HOME OFFICE POST | Sign Up',
        home: false,
        login: false,
        singUp: true,
    });
};

/*************************************************
 * POST CONTROLER FOR LOGIN | SING UP
 * ***********************************************/
//This controller will handle the POST Login Page
exports.postSingUp = (req, res, next) => {
    res.redirect('/login')
};

//This controller will handle the POST Login Page
exports.postLogin = (req, res, next) => {
    res.redirect('/')
};