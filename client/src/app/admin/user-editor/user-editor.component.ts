/*
Student IDs: 
  - 301129935
  - 301136902
  - 301180926
  - 301166198
  - 301134374
  - 301153049
WebApp name: Survey Site
Description: User Editor Component - user-editor.component.ts
*/

import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/model/auth.service';
import { User } from 'src/app/model/user.model';

const PROTOCOL = 'http';
const PORT = 3000;

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html'
})
export class UserEditorComponent implements OnInit {
  
  public errorMessage: string;

  constructor(private router: Router,
              private auth: AuthService,
              private activeRoute: ActivatedRoute,
              public user: User) 
  {
    Object.assign(this.user, this.auth.getUser(this.auth.loadUser()._id));
  }
  
  ngOnInit(): void {

  }

  //Saves a User
  save(form: NgForm): void
  {
    this.auth.modifyUser(this.user); 
    this.router.navigateByUrl('/admin/main/dashboard');
  }
}
