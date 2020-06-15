/*************************************************
 * GET CONTROLER FOR HOME 
 * ***********************************************/
//This controller will handle the home page
exports.home = (req, res, next) => {
    res.render('pages/home', {
        title: 'HOME OFFICE POST | Home',
        home: true,
        login: false,
        singUp: false,
        board: false,
    });
};

//Joab Board Controller
exports.jobBoard = (req, res, next) => {
    res.render('pages/jobboard', {
        title: 'HOME OFFICE POST | Job Board',
        home: false,
        login: false,
        singUp: false,
        board: true
    });
}