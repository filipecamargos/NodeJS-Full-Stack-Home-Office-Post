const https = require('https');

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