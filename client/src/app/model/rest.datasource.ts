import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from './question.model';
import { Survey } from './survey.model';
import {JwtHelperService} from '@auth0/angular-jwt';

import { User } from './user.model';
import { SurveyAnswered } from './surveyAnswered.model';

const PROTOCOL = 'http';
const PORT = 3000;

@Injectable()
export class RestDataSource
{
  user: User;
  baseUrl: string;
  authToken: string;

  private httpOptions = 
{
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  })
};

  constructor(private http: HttpClient,
              private jwtService: JwtHelperService)
  {
    this.user = new User();
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }

  getQuestions(): Observable<Question[]>
  {
    return this.http.get<Question[]>(this.baseUrl + 'question-list');
  }

  saveSurvey(survey: Survey): Observable<Survey>
  {
      console.log(JSON.stringify(survey));
      return this.http.post<Survey>(this.baseUrl + 'surveys/add', survey); 
  }

  saveSurveyAnswered(surveyAnswered: SurveyAnswered): Observable<SurveyAnswered>
  {
    console.log(JSON.stringify(surveyAnswered));
    return this.http.post<SurveyAnswered>(this.baseUrl + 'surveyAnswered/add', surveyAnswered);
  }

  authenticate(user: User): Observable<any>
  {
    return this.http.post<any>(this.baseUrl + 'login', user, this.httpOptions);
  }

  authenticateRegister(user: User): Observable<any>
  {
    return this.http.post<any>(this.baseUrl + 'register', user, this.httpOptions);
  }

  modifyUser(user: User): Observable<any>
  {
    return this.http.post<any>(this.baseUrl + 'user-edit', user, this.httpOptions);
  }

  storeUserData(token: any, user: User): void
  {
    localStorage.setItem('id_token', 'Bearer ' + token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  retrieveUserData(user: User): User
  {
    localStorage.getItem(JSON.stringify(user));
    return this.user = user;
  }

  logout(): Observable<any>
  {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
    return this.http.get<any>(this.baseUrl + 'logout', this.httpOptions)
  }

  loggedIn(): boolean
  {
    return !this.jwtService.isTokenExpired(this.authToken);
  }

  addQuestion(question: Question): Observable<Question>
  {
    this.loadToken();
    return this.http.post<Question>(this.baseUrl + 'question-list/add', question, this.httpOptions);
  }

  updateQuestion(question: Question): Observable<Question>
  {
    this.loadToken();
    return this.http.post<Question>(`${this.baseUrl}question-list/edit/${question._id}`, question, this.httpOptions);
  }

  deleteQuestion(id: number): Observable<Question>
  {
    this.loadToken();
    console.log(id);
    return this.http.get<Question>(`${this.baseUrl}question-list/delete/${id}`, this.httpOptions);
  }

  getSurveys(): Observable<Survey[]>
  {
    this.loadToken();
    return this.http.get<Survey[]>(this.baseUrl + 'surveys');
  }

  getAnsweredSurveys(): Observable<SurveyAnswered[]>
  {
    this.loadToken();
    return this.http.get<SurveyAnswered[]>(this.baseUrl + 'surveyAnswered');
  }

  deleteSurvey(id: number): Observable<Survey>
  {
    this.loadToken();
    return this.http.get<Survey>(`${this.baseUrl}surveys/delete/${id}`, this.httpOptions);
  }

  deleteSurveyAnswered(id: number): Observable<SurveyAnswered>
  {
    this.loadToken();
    return this.http.get<SurveyAnswered>(`${this.baseUrl}surveyAnswered/delete/${id}`, this.httpOptions);
  }


  updateSurvey(survey: Survey): Observable<Survey>
  {
    this.loadToken();
    return this.http.post<Survey>(`${this.baseUrl}surveys/edit/${survey._id}`, survey, this.httpOptions);
  }

  updateSurveyAnswered(surveyAnswered: SurveyAnswered): Observable<SurveyAnswered>
  {
    this.loadToken();
    return this.http.post<SurveyAnswered>(`${this.baseUrl}updatedOrders/edit/${surveyAnswered._id}`, surveyAnswered, this.httpOptions);
  }

  private loadToken(): void
  {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
  }
}

