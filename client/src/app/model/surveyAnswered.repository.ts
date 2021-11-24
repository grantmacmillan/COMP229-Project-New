import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Question } from "./question.model";
import { Survey } from "./survey.model";
import { RestDataSource } from "./rest.datasource";
import { StaticDataSource } from "./static.datasource";
import { SurveyAnswered } from "./surveyAnswered.model";


@Injectable()
export class SurveyAnsweredRepository
{
    private questions: Question[] = [];
    private surveyAnswered: SurveyAnswered[] = [];
    private loaded =  false;
    private categories: string[] = [];

    constructor(private dataSource: RestDataSource)
    {
        dataSource.getSurveys().subscribe(data => {
            this.surveyAnswered = data;
            this.categories = data.map(s => s.category).filter((n, index, array) => array.indexOf(n) === index).sort();
        })
    }

    loadSurveys(): void
    {
        this.loaded = true;
        this.dataSource.getSurveys().subscribe(surveyAnswered => this.surveyAnswered = surveyAnswered);
    }

    getSurveysByCategory(category?: string): Survey[]
    {
        return this.surveyAnswered.filter(s => category == null || category === s.category);
    }

    getCategories(): string[]
    {
        return this.categories;
    }

    getSurveys(): Survey[]
    {
        if(!this.loaded)
        {
            this.loadSurveys();
        }
        return this.surveyAnswered;
    }

    getSurvey(id: number): Survey
    {
        return this.surveyAnswered.find(s => s._id === id) as Survey;
    }

    saveSurvey(surveyAnswered: SurveyAnswered): Observable<SurveyAnswered>
    {
        return this.dataSource.saveSurveyAnswered(surveyAnswered);
    }

    updateSurvey(surveyAnswered: SurveyAnswered): void
    {
        this.dataSource.updateSurveyAnswered(surveyAnswered).subscribe(survey => {
            this.surveyAnswered.splice(this.surveyAnswered.findIndex(s => s._id === survey._id), 1, survey);
        })
    }

    deleteSurvey(id: number): void
    {
        this.dataSource.deleteSurvey(id).subscribe(survey => {
            this.surveyAnswered.splice(this.surveyAnswered.findIndex(s => id === s._id), 1);
        });
    }

    getQuestion(id: number): Question
    {
        return this.questions.find(q => q._id === id) as Question;
    }
}