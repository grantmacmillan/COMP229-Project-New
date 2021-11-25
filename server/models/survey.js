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
    activatesIn: Number,
    deactivatesIn: Number,
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
    collection: 'surveys'
});

module.exports = mongoose.model('Survey', Survey);