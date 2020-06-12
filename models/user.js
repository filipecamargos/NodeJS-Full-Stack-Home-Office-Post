/*********************************
 * THE USER SCHEMA -Represent the 
 * way that the job should be stored 
 * and what info is needed
 *********************************/

const mongoose = require('mongoose');

//Create Schema
const Schema = mongoose.Schema;
//Instantiate the Schema
const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    preferedJobs: {
        jobs: [{
            jobId: {
                type: Schema.Types.ObjectId,
                ref: "Job",
                required: true
            }
        }]

    }
});

/***********************************
 * HERE ARE THIS SCHEMA METHODS
 ***********************************/



//Export the model and give a name to as a parameter this will be your blue print
module.exports = mongoose.model('User', userSchema);