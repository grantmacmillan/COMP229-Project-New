/*
Student IDs: 
  - 301129935
  - 301136902
  - 301180926
  - 301166198
  - 301134374
  - 301153049
WebApp name: Survey Site
Description: Survey Answered Table Component - survey-answered-table.component.ts
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SurveyAnswered } from 'src/app/model/surveyAnswered.model';
import { SurveyAnsweredRepository } from 'src/app/model/surveyAnswered.repository';

@Component({
  selector: 'app-survey-answered-table',
  templateUrl: './survey-answered-table.component.html'
})
export class SurveyAnsweredTableComponent implements OnInit {

  includeShipped = false;

  constructor(private repository: SurveyAnsweredRepository,
              public survey: SurveyAnswered, 
              private router: Router) { }

  ngOnInit(): void { }

  //Get Surveys
  getSurveys(): SurveyAnswered[]
  {
    return this.repository.getSurveys();
  }

  //Delete a survey based on id
  delete(id: number): void
  {
    if(confirm("Are you sure you want to delete this answered survey?"))
    {
      this.repository.deleteSurvey(id);
    }
    else
    {
      this.router.navigateByUrl('/admin/main/survey-answered');
    }
  }

   //Navigates to the questionnaire component and passes the selected survey ID
   selectSurvey(id: number): void
   {
     this.router.navigateByUrl('/admin/main/survey-answered-selected/' + id);
   }
}
