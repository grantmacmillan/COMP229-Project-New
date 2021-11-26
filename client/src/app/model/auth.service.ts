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

    constructor(private datasource: RestDataSource)
    {
        this.user = new User();
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

    //Allows the retrieval of User Date -- Still Need to Work on that
    retrieveUserData(user: User): User
    {
        return this.datasource.retrieveUserData(user);
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
