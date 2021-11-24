import { Injectable } from "@angular/core";
import { Question } from "./question.model";

@Injectable()
export class Questionnaire
{
    public lines: QuestionnaireLine[] = [];
    public updatedAnswer = "";

    addLine(question: Question, answer: string = ""): void
    {
        const line = this.lines.find(l => l.question._id === question._id);
        if(line !== undefined)
        {
            line.answer = answer;
        }
        else
        {
            this.lines.push(new QuestionnaireLine(question, answer));
        }
    }

    addSurveyAnsweredLine(question: Question, answer: string): void
    {
        const line = this.lines.find(l => l.question._id === question._id);
        if(line !== undefined)
        {
            line.answer = answer;
        }
        else
        {
            this.lines.push(new QuestionnaireLine(question, answer));
        }
    }

    updateAnswer(question: Question, answer: string): void
    {
        const line = this.lines.find(l => l.question._id === question._id);
        if(line !== undefined)
        {
            line.answer = String(answer);
        }
    }

    removeLine(id: number): void
    {
        const index = this.lines.findIndex(l => l.question._id === id)
        this.lines.splice(index, 1);
    }

    clear():void
    {
        this.lines = [];
    }
}

export class QuestionnaireLine
{
    constructor(public question: Question,
                public answer: string) { }
}