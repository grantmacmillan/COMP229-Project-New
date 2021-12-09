/*
Student IDs: 
  - 301129935
  - 301136902
  - 301180926
  - 301166198
  - 301134374
  - 301153049
WebApp name: Survey Site
Description: Dashboard Component - dashboard.component.ts
*/
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/model/auth.service';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  constructor(public user:User,
              private router: Router,
              private auth: AuthService,
              private activeRoute: ActivatedRoute) 
              {
                //Object.assign(this.user, auth.getUser(activeRoute.snapshot.params.id)); 
              }

  ngOnInit(): void {
    this.user._id = this.auth.getLoggedUserId();
  }

  //Navigate to modify user and pass in the user id
  modifyUser(): void {
    this.router.navigateByUrl('/admin/main/user-edit/' + this.user._id);
  }
}
