import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Question } from "./question.model";
import { Survey } from "./survey.model";
import { RestDataSource } from "./rest.datasource";
import { StaticDataSource } from "./static.datasource";


@Injectable()
export class SurveyRepository
{
    private questions: Question[] = [];
    private surveys: Survey[] = [];
    private loaded =  false;
    private categories: string[] = [];

    constructor(private dataSource: RestDataSource)
    {
        dataSource.getSurveys().subscribe(data => {
            this.surveys = data;
            this.categories = data.map(c => c.category).filter((n, index, array) => array.indexOf(n) === index).sort();
        })
    }

    loadSurveys(): void
    {
        this.loaded = true;
        this.dataSource.getSurveys().subscribe(surveys => this.surveys = surveys);
    }

    getSurveysByCategory(category?: string): Survey[]
    {
        return this.surveys.filter(s => category == null || category === s.category);
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
        return this.surveys;
    }

    getSurvey(id: number): Survey
    {
        return this.surveys.find(s => s._id === id) as Survey;
    }

    saveSurvey(survey: Survey): Observable<Survey>
    {
        return this.dataSource.saveSurvey(survey);
    }

    updateSurvey(updatedSurvey: Survey): void
    {
        this.dataSource.updateSurvey(updatedSurvey).subscribe(survey => {
            this.surveys.splice(this.surveys.findIndex(s => s._id === survey._id), 1, survey);
        })
    }

    deleteSurvey(id: number): void
    {
        this.dataSource.deleteSurvey(id).subscribe(survey => {
            this.surveys.splice(this.surveys.findIndex(s => id === s._id), 1);
        });
    }

    getQuestion(id: number): Question
    {
        return this.questions.find(q => q._id === id) as Question;
    }
}