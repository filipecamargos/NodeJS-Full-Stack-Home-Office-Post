const https = require('https');
const crypto = require('crypto');
const User = require('../models/user');
const user = require('../models/user');

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

/*************************************************
 * GET JOB BOARD CONTROLLER
 * ***********************************************/
exports.jobBoard = (req, res, next) => {
    //Connnect to the API
    https.get("https://remotive.io/api/remote-jobs", (ress) => {

        //variable to store hte chunk data
        data = [];

        ress.on("data", (chunk) => {
            data.push(chunk);
        });

        ress.on("end", () => {
            const parsedData = JSON.parse(Buffer.concat(data).toString());
            res.render('pages/jobboard', {
                title: 'HOME OFFICE POST | Job Board',
                home: false,
                login: false,
                singUp: false,
                board: true,
                data: parsedData
            });

        });
    });
}


/*************************************************
 * POST SAVED JOB
 * ***********************************************/
exports.postSaved = (req, res, next) => {
    //Receive the JOB ID
    const jobID = req.body.job_id;

    //Check if item is not already add
    req.user.Savedjobs.push(jobID);
    req.user.save();

    //Testing
    console.log(req.user);
    console.log(req.body.job_id);

    res.redirect('/jobboard')
}