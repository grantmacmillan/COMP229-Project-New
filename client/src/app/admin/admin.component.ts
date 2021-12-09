/*
Student IDs: 
  - 301129935
  - 301136902
  - 301180926
  - 301166198
  - 301134374
  - 301153049
WebApp name: Survey Site
Description: Admin Component - admin.component.ts
*/

import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../model/auth.service";
import { User } from "../model/user.model";

@Component({
    templateUrl: './admin.component.html'
})
export class AdminComponent
{
    constructor(private auth: AuthService,
                private router: Router) {}

    //Loggin user out
    logout(): void
    {
        this.auth.logout();
        this.router.navigateByUrl('/');
    }

    //Modifying user
   // modifyUser(user: User): void {
    //    this.router.navigateByUrl('/admin/main/user-edit/' + user.id);
    //}
}