/*********************************
 * THE JOB SCHEMA -Represent the 
 * way that the job should be stored 
 * and what info is needed
 *********************************/

const mongoose = require('mongoose');

//Create Schema
const Schema = mongoose.Schema;
//Instantiate the Schema
const jobSchema = new Schema({
    company_name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: false
    }
});