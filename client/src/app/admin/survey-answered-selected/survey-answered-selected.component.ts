/*
Student IDs: 
  - 301129935
  - 301136902
  - 301180926
  - 301166198
  - 301134374
  - 301153049
WebApp name: Survey Site
Description: Survey-Answered Selected Component - survey-answered-selected.component.ts
*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SurveyAnswered } from 'src/app/model/surveyAnswered.model';
import { SurveyAnsweredRepository } from 'src/app/model/surveyAnswered.repository';

@Component({
  selector: 'app-survey-answered-selected',
  templateUrl: './survey-answered-selected.component.html'
})
export class SurveyAnsweredSelectedComponent implements OnInit {

  constructor(public survey: SurveyAnswered,
              private repositorySurvey: SurveyAnsweredRepository,
              private activeRoute: ActivatedRoute) 
  {
    Object.assign(this.survey, repositorySurvey.getSurvey(activeRoute.snapshot.params.id));
  }

  ngOnInit(): void {
  }

}
