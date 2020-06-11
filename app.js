//Import the necessary packages
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');


//Instantiate the express object to manager some of the functionality
const app = express();

//Require the routers
const errorController = require('./routes/error')
const mainPageRoutes = require('./routes/postPages');

app.use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .use('/', mainPageRoutes)
    .use(errorController.get404);

app.listen(3000)