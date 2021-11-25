import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Survey } from 'src/app/model/survey.model';
import { SurveyRepository } from 'src/app/model/survey.repository';
import { SurveyAnswered } from 'src/app/model/surveyAnswered.model';
import { SurveyAnsweredRepository } from 'src/app/model/surveyAnswered.repository';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-stats-table',
  templateUrl: './stats-table.component.html',
  styleUrls: ['./stats-table.component.css']
})
export class StatsTableComponent implements OnInit {

  includeShipped = false;

  @ViewChild('statisticTable') statisticTable: ElementRef;

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

  getSurveys(): SurveyAnswered[]
  {
    return this.repository.getSurveys();
  }

  exportElmToExcel(): void
  {
    this.contactService.exportTableElmToExcel(this.statisticTable, 'statisticTable');
  }

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

  get choice1(): Number
  {
    let count = 0;
    let survey = this.survey;

    this.getSurveys().forEach(function (value) {
      if(value.title == survey.title)
        value.questionnaire.lines.forEach(function (line) {
          if(line.answer == line.question.choice1)
            count++
        })
    })
    return count;
  }

  get choice2(): Number
  {
    let count = 0;
    let survey = this.survey;

    this.getSurveys().forEach(function (value) {
      if(value.title == survey.title)
        value.questionnaire.lines.forEach(function (line) {
          if(line.answer == line.question.choice2)
            count++
        })
    })
    return count;
  }

  get choice3(): Number
  {
    let count = 0;
    let survey = this.survey;

    this.getSurveys().forEach(function (value) {
      if(value.title == survey.title)
        value.questionnaire.lines.forEach(function (line) {
          if(line.answer == line.question.choice3)
            count++
        })
    })
    return count;
  }

  get choice4(): Number
  {
    let count = 0;
    let survey = this.survey;

    this.getSurveys().forEach(function (value) {
      if(value.title == survey.title)
        value.questionnaire.lines.forEach(function (line) {
          if(line.answer == line.question.choice4)
            count++
        })
    })
    return count;
  }
}
