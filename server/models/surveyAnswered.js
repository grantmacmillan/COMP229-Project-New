let mongoose = require('mongoose');

//Create order model class
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