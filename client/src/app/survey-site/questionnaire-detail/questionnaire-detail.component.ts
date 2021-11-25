import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Questionnaire } from 'src/app/model/questionnaire.model';
import { Survey } from 'src/app/model/survey.model';
import { SurveyRepository } from 'src/app/model/survey.repository';
import { SurveyAnswered } from 'src/app/model/surveyAnswered.model';
import { SurveyAnsweredRepository } from 'src/app/model/surveyAnswered.repository';

@Component({
  selector: 'app-questionnaire-detail',
  templateUrl: './questionnaire-detail.component.html',
  styleUrls: ['./questionnaire-detail.component.css']
})
export class QuestionnaireDetailComponent implements OnInit {
  editing = false;
  

  constructor(public questionnaire: Questionnaire,
              public survey: Survey,
              private surveyAnswered: SurveyAnswered,
              private repositorySurvey: SurveyRepository,
              private repository: SurveyAnsweredRepository,
              private activeRoute: ActivatedRoute,
              private router: Router) 
  {
      Object.assign(this.survey, repositorySurvey.getSurvey(activeRoute.snapshot.params.id));
  }

  ngOnInit(): void {
  }

  submitSurvey(survey: Survey): void
  {
    this.surveyAnswered = survey;
    this.repository.saveSurvey(this.surveyAnswered).subscribe();
    window.alert("This Survey has been submitted")
    this.router.navigateByUrl('/');
  }
}
