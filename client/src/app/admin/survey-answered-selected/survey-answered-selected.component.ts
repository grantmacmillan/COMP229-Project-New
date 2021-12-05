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
