//Import the necessary packages
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require("cors");

//Mongoose Database Drive
const mongoose = require('mongoose');

// Connecct to Heroku || localhost:5000 || data base
const PORT = process.env.PORT || 3000
const MONGODB_URL = process.env.MONGODB_URL || "mongodb+srv://cs341:VfP2xOJvOONEBDfK@cluster0-c8oj0.mongodb.net/homeoffice?retryWrites=true&w=majority";


//Instantiate the express object to manager some of the functionality
const app = express();

//Setting up for deployin on Heroku
const corsOptions = {
    origin: "https://safe-dawn-11858.herokuapp.com/",
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

//Setting up Data Base Options
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    family: 4
};

//Require the routers
const errorController = require('./routes/error')
const mainPagesRoutes = require('./routes/postPages');
const authRoutes = require('./routes/auth');

app.use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .use(authRoutes)
    .use('/', mainPagesRoutes)
    .use(errorController.get404);

//CONNECTION
mongoose
    .connect(
        MONGODB_URL, options
    )
    .then(result => {
        app.listen(PORT);
    })
    .catch(err => {
        console.log(err);
    });