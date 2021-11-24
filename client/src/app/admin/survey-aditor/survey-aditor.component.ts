import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Questionnaire } from 'src/app/model/questionnaire.model';
import { Survey } from 'src/app/model/survey.model';
import { SurveyRepository } from 'src/app/model/survey.repository';

@Component({
  selector: 'app-survey-aditor',
  templateUrl: './survey-aditor.component.html',
  styleUrls: ['./survey-aditor.component.css']
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
  }

  ngOnInit(): void {
  }

  updateSurvey(form: NgForm): void
  {
    this.submitted = true;
    if(form.valid)
    {
        this.repository.updateSurvey(this.survey);
    }

    this.router.navigate(['/admin/main/surveys']).then(() => {window.location.reload()}); //Same fix as teacher 
  }

  addQuestion(): void 
  {
    this.router.navigateByUrl('/admin/main/page-edit');
  }

  surveyList(): void
  {
    this.router.navigateByUrl('/admin/main/surveys'); //Same fix as teacher 
  }
}
