import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from 'src/app/model/question.model';
import { Questionnaire } from 'src/app/model/questionnaire.model';
import { Survey } from 'src/app/model/survey.model';
import { SurveyRepository } from 'src/app/model/survey.repository';


//This should be the add route
@Component({
  selector: 'app-survey-editor',
  templateUrl: './survey-editor.component.html',
  styleUrls: ['./survey-editor.component.css']
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
    {
      Object.assign(this.survey, repository.getSurvey(activeRoute.snapshot.params.id)); 
    }
  }

  ngOnInit(): void {
  }

  submitSurvey(form: NgForm): void
  {
    this.submitted = true;
    if(form.valid)
    {
        this.repository.saveSurvey(this.survey).subscribe(survey => {
        this.survey.clear();
        this.surveySent = true;
        this.submitted = false;
      });
    }
  }

  addQuestion(): void 
  {
    this.router.navigateByUrl('/admin/main/questions');
  }

  surveyList(): void
  {
    this.router.navigate(['/admin/main/surveys']).then(() => {window.location.reload()}); //Same fix as teacher 
  }

  cancel(): void
  {
    this.router.navigateByUrl('/admin/main/surveys');
  }
}
