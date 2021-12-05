/*
Student IDs: 
  - 301129935
  - 301136902
  - 301180926
  - 301166198
  - 301134374
  - 301153049
WebApp name: Survey Site
Description: Auth Component - auth.component.ts
*/

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/model/auth.service';
import { RestDataSource } from 'src/app/model/rest.datasource';

import { User } from '../../model/user.model'

@Component({
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {

  //public user: User;
  public errorMessage: string;
  public users: User[];

  constructor(private router: Router,
              private auth: AuthService,
              private datasource: RestDataSource,
              public user: User) 
              {
              
              }

  ngOnInit(): void 
  {
    this.users = this.auth.getUsers();
    console.log("ngOnInit of auth.component"+this.users);
  }

  //Authenticate a user
  authenticate(form: NgForm, id: string, user:User): void
  {
    console.log("In authenticate of auth.component.ts" + this.datasource.getUsers());
    if(form.valid)
    {
      this.auth.authenticate(this.user).subscribe(data => {
          if(data.success)
          {
            this.auth.storeUserData(data.token, data.user);
            this.router.navigateByUrl('/admin/main/dashboard');
            console.log(this.user);
          }
      });
    }
    else
    {
      this.errorMessage = 'Form Data Invalid';
    }
  }
}
