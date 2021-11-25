import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SurveyAnswered } from 'src/app/model/surveyAnswered.model';
import { SurveyAnsweredRepository } from 'src/app/model/surveyAnswered.repository';

@Component({
  selector: 'app-survey-answered-table',
  templateUrl: './survey-answered-table.component.html',
  styleUrls: ['./survey-answered-table.component.css']
})
export class SurveyAnsweredTableComponent implements OnInit {

  includeShipped = false;

  constructor(private repository: SurveyAnsweredRepository,
              public survey: SurveyAnswered, 
              private router: Router) { }

  ngOnInit(): void {
  }

  getSurveys(): SurveyAnswered[]
  {
    return this.repository.getSurveys();
  }

  filledOutSurvey(): void
  {
    this.router.navigateByUrl('/admin/surveyAnswered');
  }

  delete(id: number): void
  {
    if(confirm("Are you sure?"))
    {
      this.repository.deleteSurvey(id);
    }
    else
    {
      this.router.navigateByUrl('/admin/surveyAnswered');
    }
  }
}
