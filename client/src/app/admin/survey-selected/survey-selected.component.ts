/*
Student IDs: 
  - 301129935
  - 301136902
  - 301180926
  - 301166198
  - 301134374
  - 301153049
WebApp name: Survey Site
Description: Survey Selected Component - survey-selected.component.ts
*/
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Survey } from 'src/app/model/survey.model';
import { SurveyRepository } from 'src/app/model/survey.repository';

@Component({
  selector: 'app-survey-selected',
  templateUrl: './survey-selected.component.html'
})
export class SurveySelectedComponent implements OnInit {

  constructor(public survey: Survey,
              private repositorySurvey: SurveyRepository,
              private activeRoute: ActivatedRoute) 
  {
    Object.assign(this.survey, repositorySurvey.getSurvey(activeRoute.snapshot.params.id));
  }

  ngOnInit(): void { }
}