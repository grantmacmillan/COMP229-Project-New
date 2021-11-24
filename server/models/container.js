"use strict"
class Question 
{
    constructor(_id = "", title = "", rightAnswer = "") {
        this._id = _id;
        this.title = title;
        this.rightAnswer = rightAnswer
    }

    toString()
    {
        return "_id        : " + this._id + "\n" +
               "title      : " + this.title + "\n" + 
               "rightAnswer: " + this.rightAnswer + "\n" 
    }
}

class Line
{
    constructor(question = new Question(), answer = "") {
        this.question = question;
        this.answer = answer;
    }

    toString()
    {
        return "{" + this.question.toString() + "}, \n" +
               " answer: " + this.answer;
    }
}

class Questionnaire
{
    constructor(lines = [])
    {
        this.lines = lines;
    }

    addLine(line)
    {
        this.lines.push(line);
    }

    empty()
    {
        this.lines = [];
    }
}

module.exports.Questionnaire = Questionnaire;
module.exports.Line = Line;
module.exports.Question = Question;