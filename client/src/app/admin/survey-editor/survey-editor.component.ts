/*
Student IDs: 
  - 301129935
  - 301136902
  - 301180926
  - 301166198
  - 301134374
  - 301153049
WebApp name: Survey Site
Description: Survey Editor Component - survey-editor.component.ts
*/
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Questionnaire } from 'src/app/model/questionnaire.model';
import { Survey } from 'src/app/model/survey.model';
import { SurveyRepository } from 'src/app/model/survey.repository';

@Component({
  selector: 'app-survey-editor',
  templateUrl: './survey-editor.component.html'
})
export class SurveyEditorComponent implements OnInit {

  editing = false;
  submitted = false;
  surveySent = false;

  constructor(private router: Router,
              public survey: Survey,
              private repository: SurveyRepository,
              public questionnaire: Questionnaire,
              private activeRoute: ActivatedRoute) 
  {
    this.editing = activeRoute.snapshot.params.mode === 'edit'; 

    if(this.editing)
      Object.assign(this.survey, repository.getSurvey(activeRoute.snapshot.params.id)); 
  }

  ngOnInit(): void { }

  //Submits a survey
  submitSurvey(form: NgForm): void
  {
    this.submitted = true;
    if(form.valid)
        this.repository.saveSurvey(this.survey).subscribe(survey => {
        this.survey.clear();
        this.surveySent = true;
        this.submitted = false;
        
      }); 
  }

  //Go to dashboard
  surveyList(): void
  {
    this.router.navigateByUrl('/admin/main/dashboard');
  }
}
