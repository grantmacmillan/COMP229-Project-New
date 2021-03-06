/*
Student IDs: 
  - 301129935
  - 301136902
  - 301180926
  - 301166198
  - 301134374
  - 301153049
WebApp name: Survey Site
Description: Routing Module of the App - app-routing.module.ts
*/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyListComponent } from './survey-site/survey-list.component';
import { QuestionnaireDetailComponent } from './survey-site/questionnaire-detail/questionnaire-detail.component';
import { SurveysFirstGuard } from './guards/surveysFirst.guard';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, data: {title: 'Home'}},
  {path: 'login', data: {title: 'Login'}, redirectTo: '/admin/auth', pathMatch: 'full'},
  {path: 'register', data: {title: 'Register'}, redirectTo: '/admin/register', pathMatch: 'full'},

  {path: 'about', component: AboutComponent, data: {title: 'About'}},

  {path: 'question-list', component: SurveyListComponent, data: {title: 'Surveys'}, canActivate: [SurveysFirstGuard]},
  {path: 'questionnaire/:id', component: QuestionnaireDetailComponent, data: {title: 'Questionnaire'}, canActivate: [SurveysFirstGuard]},
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo:'/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [SurveysFirstGuard]
})
export class AppRoutingModule { }
