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
import { User } from '../../model/user.model'

@Component({
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {

  public errorMessage: string;
  public users: User[];

  constructor(private router: Router,
              private auth: AuthService,
              public user: User) { }

  ngOnInit(): void { }

  //Authenticate a user
  authenticate(form: NgForm, user: User): void
  {
    //Checks if form is valid
    if(form.valid)
      this.auth.authenticate(user).subscribe(data => {
          if(data.success)
          {
            this.auth.storeUserData(data.token, data.user);
            this.router.navigateByUrl('/admin/main/dashboard');
          }
      });
    
    else 
      this.errorMessage = 'Form Data Invalid';
    
    //Checks if wrong username or password
    if(this.user._id == null || this.user._id == undefined || this.user._id == "") 
      this.errorMessage = "Wrong Username or Password";
  }
}