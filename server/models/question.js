let mongoose = require('mongoose');

//Question Model
let questionModel = mongoose.Schema({
    title: String,
    choice1: String,
    choice2: String,
    choice3: String,
    choice4: String
},
{
    collection: "questions"
});

module.exports = mongoose.model('Question', questionModel);