/*
Student IDs: 
  - 301129935
  - 301136902
  - 301180926
  - 301166198
  - 301134374
  - 301153049
WebApp name: Survey Site
Description: Authentication Service - auth.service.ts
*/

import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RestDataSource } from "./rest.datasource";
import { User } from "./user.model";

@Injectable()
export class AuthService
{
    user: User;
    users: User[];

    constructor(private datasource: RestDataSource)
    {
        this.user = new User();
        datasource.getUsers().subscribe(data => {
            this.users=data;
            console.log(this.users);});
    }

    getUsers(): User[] {
        return this.users;
    }

    //Authenticate An Existing User
    authenticate(user: User): Observable<any>
    {
        return this.datasource.authenticate(user);
    }

    //Creates Authentication for a New User
    authenticateRegister(user: User): Observable<any>
    {
        return this.datasource.authenticateRegister(user);
    }

    //Allows Modification of User Date -- Still Need To Work on That
    modifyUser(user: User): Observable<any>
    {
        return this.datasource.modifyUser(user);
    }

    //Returns Sepecific User based on Id -- Still Need to work on that
    getUser(user: User): User
    {
        return this.users.find(u => u._id === user._id) as User;
    }

    //ADDED THIS
    getUser2(): User {
        return this.datasource.loadUser();
    }

    //Stores User Data
    storeUserData(token: any, user: User): void
    {
        this.datasource.storeUserData(token, user);
    }

    //Returns True is User is Authenticated
    get authenticated(): boolean
    {
        return this.datasource.loggedIn();
    }

    //Logs the User Out
    logout(): Observable<any>
    {
        return this.datasource.logout();
    }
}
