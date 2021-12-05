/*
Student IDs: 
  - 301129935
  - 301136902
  - 301180926
  - 301166198
  - 301134374
  - 301153049
WebApp name: Survey Site
Description: Survey Table Component - survey-table.component.ts
*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
              private auth: AuthService,
              private activeRoute: ActivatedRoute,
              private router: Router,
              public user: User,
              public survey:Survey) 
              {
               // Object.assign(this.user, auth.getUser(activeRoute.snapshot.params.id)); 
              }

  ngOnInit(): void {
   
  }

  getUser(): User {

    var userReturn = null;
    this.auth.getUsers().forEach(function (value) {
      if(value._id == this.user._id)
        userReturn =  this.user;
    })
    return userReturn;
  }

  //Get surveys
  getSurveys(): Survey[]
  {
    return this.repository.getSurveys();
  }

  //Delete a survey based on an id
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

  //Go to edit survey page
  editSurvey(survey: Survey): void 
  {
    this.router.navigateByUrl('/admin/main/surveys/edit/' + survey._id);
  }

  //Go to stats page
  stats(id: number): void
  {
    this.router.navigateByUrl('/admin/main/stats-table/' + id); 
  }

  //Modify User
  modifyUser(user: User): void
  {
    this.router.navigateByUrl('/admin/main/user-edit');
  }

  //Create Survey
  createSurvey(): void
  {
    this.router.navigateByUrl('/admin/main/surveys/add');
    //this.router.navigate(['/admin/main/surveys/add']).then(() => {window.location.reload()}); //Same fix as teacher
  }

  //Navigates to the questionnaire component and passes the selected survey ID
  selectSurvey(id: number): void
  {
    this.router.navigateByUrl('/admin/main/survey-selected/' + id);
  }
}
