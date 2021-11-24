let mongoose = require('mongoose');

//Create survey model class
let Survey = mongoose.Schema({
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
                rightAnswer: String
            },
            answer: String
        }]
    }
},
{
    collection: 'surveys'
});

module.exports = mongoose.model('Survey', Survey);