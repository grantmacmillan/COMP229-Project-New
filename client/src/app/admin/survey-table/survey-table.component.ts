import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/model/auth.service';
import { Survey } from 'src/app/model/survey.model';
import { SurveyRepository } from 'src/app/model/survey.repository';
import { User } from 'src/app/model/user.model';

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

  editSurvey(id: number): void 
  {
    this.router.navigateByUrl('/admin/main/surveys/edit/' + id);
  }

  stats(id: number): void
  {
    this.router.navigateByUrl('/admin/main/stats-table/' + id); 
  }
}
