/*
Student IDs: 
  - 301129935
  - 301136902
  - 301180926
  - 301166198
  - 301134374
  - 301153049
WebApp name: Survey Site
Description: Stats Table Component - stats-table.component.ts
*/

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ChildrenOutletContexts, Router } from '@angular/router';
import { Question } from 'src/app/model/question.model';
import { Questionnaire } from 'src/app/model/questionnaire.model';
import { Survey } from 'src/app/model/survey.model';
import { SurveyRepository } from 'src/app/model/survey.repository';
import { SurveyAnswered } from 'src/app/model/surveyAnswered.model';
import { SurveyAnsweredRepository } from 'src/app/model/surveyAnswered.repository';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-stats-table',
  templateUrl: './stats-table.component.html'
})
export class StatsTableComponent implements OnInit {

  includeShipped = false;

  @ViewChild('statisticTable') statisticTable: ElementRef;

  public surveyAnsweredArray: SurveyAnswered[] = [];
  public choices: string[] = [];

  constructor(private repository: SurveyAnsweredRepository,
              private repositorySurvey: SurveyRepository,
              private activeRoute: ActivatedRoute,
              public surveyAnswered: SurveyAnswered, 
              public survey: Survey,
              private contactService: ContactService) 
  {
    Object.assign(this.survey, repositorySurvey.getSurvey(activeRoute.snapshot.params.id));
  
  }

  ngOnInit(): void {
  }

  //Get Surveys
  getSurveys(): SurveyAnswered[]
  {
    return this.repository.getSurveys();
  }

  //Exporting Table to Excel
  exportElmToExcel(): void
  {
    this.contactService.exportTableElmToExcel(this.statisticTable, 'statisticTable');
  }

  //Getting Number of Answered Surveys Stats
  get numberAnsweredSurveys(): Number
  {
    let count = 0;
    let survey = this.survey;

    this.getSurveys().forEach(function (value) {
      if(value.title == survey.title)
        count++;
    });
    return count;
  }

getChoice1(title: string): Number
  {
    let count = 0;
    let survey = this.survey;

    this.getSurveys().forEach(function (value) {
      if(value.title == survey.title)
        value.questionnaire.lines.forEach(function (line) {
          if(line.question.title == title && line.answer == line.question.choice1)
            count++;
        })
    })
    return count;
  }

  getChoice1Value(title: string): String
  {
    var choice = "";
    let survey = this.survey;

    this.getSurveys().forEach(function (value) {
      if(value.title == survey.title)
        value.questionnaire.lines.forEach(function (line) {
          if(line.question.title == title)
           choice = line.question.choice1;
        })
    })
    return choice;
  }

  getChoice2Value(title: string): String
  {
    var choice = "";
    let survey = this.survey;

    this.getSurveys().forEach(function (value) {
      if(value.title == survey.title)
        value.questionnaire.lines.forEach(function (line) {
          if(line.question.title == title)
           choice = line.question.choice2;
        })
    })
    return choice;
  }

  getChoice3Value(title: string): String
  {
    var choice = "";
    let survey = this.survey;

    this.getSurveys().forEach(function (value) {
      if(value.title == survey.title)
        value.questionnaire.lines.forEach(function (line) {
          if(line.question.title == title)
            choice = line.question.choice3;
        })
    })
    return choice;
  }

  getChoice4Value(title: string): String
  {
    var choice = "";
    let survey = this.survey;

    this.getSurveys().forEach(function (value) {
      if(value.title == survey.title)
        value.questionnaire.lines.forEach(function (line) {
          if(line.question.title == title)
            choice = line.question.choice4;
        })
    })
    return choice;
  }

getChoice2(title: string): Number
  {
    let count = 0;
    let survey = this.survey;

    this.getSurveys().forEach(function (value) {
      if(value.title == survey.title)
        value.questionnaire.lines.forEach(function (line) {
          if(line.question.title == title && line.answer == line.question.choice2)
            count++;
        })
    })
    return count;
  }

getChoice3(title: string): Number
  {
    let count = 0;
    let survey = this.survey;

    this.getSurveys().forEach(function (value) {
      if(value.title == survey.title)
        value.questionnaire.lines.forEach(function (line) {
          if(line.question.title == title && line.answer == line.question.choice3)
            count++;
        })
    })
    return count;
  }

getChoice4(title: string): Number
  {
    let count = 0;
    let survey = this.survey;

    this.getSurveys().forEach(function (value) {
      if(value.title == survey.title)
        value.questionnaire.lines.forEach(function (line) {
          if(line.question.title == title && line.answer == line.question.choice4)
            count++;
        })
    })
    return count;
  }
}
