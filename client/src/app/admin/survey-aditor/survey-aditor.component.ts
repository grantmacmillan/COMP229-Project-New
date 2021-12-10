/*
Student IDs: 
  - 301129935
  - 301136902
  - 301180926
  - 301166198
  - 301134374
  - 301153049
WebApp name: Survey Site
Description: Survey-Aditor Component - survey-aditor.component.ts
*/
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from 'src/app/model/question.model';
import { Questionnaire } from 'src/app/model/questionnaire.model';
import { Survey } from 'src/app/model/survey.model';
import { SurveyRepository } from 'src/app/model/survey.repository';

@Component({
  selector: 'app-survey-aditor',
  templateUrl: './survey-aditor.component.html'
})
export class SurveyAditorComponent implements OnInit {

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
    Object.assign(this.survey, repository.getSurvey(activeRoute.snapshot.params.id));
    this.questionnaire = this.survey.questionnaire;
  }

  ngOnInit(): void { }

  //Update surveys
  updateSurvey(form: NgForm): void
  {
    this.submitted = true;
    if(form.valid)
      this.repository.updateSurvey(this.survey);
    
    this.router.navigate(['/admin/main/surveys']).then(() => {window.location.reload()});
  }

  //Add Questions
  addQuestion(id: number): void
  {
    this.router.navigateByUrl('/admin/main/page-edit');
  }

  //Remove a question
  removeQuestion(question: Question): void
  {
    if(confirm("Are you sure you want to delete this question?")) {
      const index = this.survey.questionnaire.lines.findIndex(l => l.question.title === question.title)
      this.questionnaire.lines.splice(index, 1);
      this.repository.updateSurvey(this.survey);
    }
    else {
      this.router.navigateByUrl('/admin/main/surveys/edit/' + this.survey._id);
    }
  }
}