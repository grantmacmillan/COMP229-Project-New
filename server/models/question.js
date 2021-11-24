let mongoose = require('mongoose');

//Question Model
let questionModel = mongoose.Schema({
    title: String,
    rightAnswer: String
},
{
    collection: "questions"
});

module.exports = mongoose.model('Question', questionModel);