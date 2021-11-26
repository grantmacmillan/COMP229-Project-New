/*
Student IDs: 
  - 301129935
  - 301136902
  - 301180926
  - 301166198
  - 301134374
  - 301153049
WebApp name: Survey Site
Description: SurveyAnswered Model - surveyAnswered.js
*/

let mongoose = require('mongoose');

//Create SurveyAnswered model class
let SurveyAnswered = mongoose.Schema({
    title: String,
    category: String,
    description: String,
    name: String,
    address: String,
    city: String,
    province: String,
    postalCode: String,
    country: String,
    activatesIn: String,
    deactivatesIn: String,
    questionnaire: 
    {
        lines:
        [{question:
            {
                title: String,
                choice1: String,
                choice2: String,
                choice3: String,
                choice4: String
            },
            answer: String
        }]
    }
},
{
    collection: 'surveyAnswered'
});

module.exports = mongoose.model('SurveyAnswered', SurveyAnswered);