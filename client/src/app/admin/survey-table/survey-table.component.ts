import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Survey } from 'src/app/model/survey.model';
import { SurveyRepository } from 'src/app/model/survey.repository';

@Component({
  templateUrl: './survey-table.component.html'
})
export class SurveyTableComponent implements OnInit 
{
  includeShipped = false;

  constructor(private repository: SurveyRepository,
              private router: Router) { }

  ngOnInit(): void {
  }

  getSurveys(): Survey[]
  {
    return this.repository.getSurveys();
  }

  delete(id: number): void
  {
    if(confirm("Are you sure?"))
    {
      this.repository.deleteSurvey(id);
    }
    else
    {
      this.router.navigateByUrl('/admin/main/surveys');
    }
  }

  addSurvey(): void 
  {
    this.router.navigateByUrl('/admin/main/surveys/add');
  }

  editSurvey(id: number): void 
  {
    this.router.navigateByUrl('/admin/main/surveys/edit/' + id);
  }
}
