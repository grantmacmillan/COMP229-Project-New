"use strict"
class Question 
{
    constructor(_id = "", title = "", choice1 = "", choice2 = "", choice3 = "", choice4 = "") {
        this._id = _id;
        this.title = title;
        this.choice1 = choice1;
        this.choice2 = choice2;
        this.choice3 = choice3;
        this.choice4 = choice4;
    }

    toString()
    {
        return "_id        : " + this._id + "\n" +
               "title      : " + this.title + "\n" + 
               "choice 1   : " + this.choice1 + "\n" 
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