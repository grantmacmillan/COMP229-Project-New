import { Injectable } from "@angular/core";
import {Question} from "./question.model";
import { RestDataSource } from "./rest.datasource";
import { StaticDataSource } from "./static.datasource";

@Injectable()
export class QuestionRepository
{
    private questions: Question[] = [];

    constructor(private dataSource: RestDataSource)
    {
        dataSource.getQuestions().subscribe(data => {
            this.questions=data;
        });
    }

    getQuestions(): Question[]
    {
      return this.questions;
    }

    getQuestion(id: number): Question
    {
        return this.questions.find(q => q._id === id) as Question;
    }

    saveQuestion(savedQuestion: Question): void
    {
        if(savedQuestion._id === null || savedQuestion._id === 0 || savedQuestion._id === undefined)
        {
            this.dataSource.addQuestion(savedQuestion).subscribe(question => {
                this.questions.push(savedQuestion);
            })
        }
        else
        {
            this.dataSource.updateQuestion(savedQuestion).subscribe(question => {
                this.questions.splice(this.questions.findIndex(q => q._id === savedQuestion._id), 1, savedQuestion);
            });
        }
    }

    deleteQuestion(deletedQuestionID: number): void
    {
        this.dataSource.deleteQuestion(deletedQuestionID).subscribe(question => {
            this.questions.splice(this.questions.findIndex(q => q._id === deletedQuestionID), 1);
        })
    }
}