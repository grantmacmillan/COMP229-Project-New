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

  }

  //Authenticate a user
  authenticate(form: NgForm, user: User): void
  {
    if(form.valid)
    {
      this.auth.authenticate(user).subscribe(data => {
          if(data.success)
          {
            console.log(data.user);
            this.auth.storeUserData(data.token, data.user);
            this.router.navigateByUrl('/admin/main/dashboard');
          }
      });
    }
    else
    {
      this.errorMessage = 'Form Data Invalid';
    }
  }
}
