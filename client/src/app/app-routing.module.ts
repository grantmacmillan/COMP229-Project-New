import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SurveyListComponent } from './survey-site/survey-list.component';
import { QuestionnaireDetailComponent } from './survey-site/questionnaire-detail/questionnaire-detail.component';
import { CheckoutComponent } from './survey-site/checkout/checkout.component';
import { SurveysFirstGuard } from './guards/surveysFirst.guard';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ServicesComponent } from './pages/services/services.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent, data: {title: 'Home'}},
  {path: 'login', data: {title: 'Login'}, redirectTo: '/admin/auth', pathMatch: 'full'},
  {path: 'register', data: {title: 'Register'}, redirectTo: '/admin/register', pathMatch: 'full'},

  {path: 'about', component: AboutComponent, data: {title: 'About'}},
  {path: 'products', component: ProductsComponent, data: {title: 'Products'}},
  {path: 'services', component: ServicesComponent, data: {title: 'Services'}},
  {path: 'contact', component: ContactComponent, data: {title: 'Contact'}},

  {path: 'question-list', component: SurveyListComponent, data: {title: 'Surveys'}, canActivate: [SurveysFirstGuard]},
  {path: 'questionnaire/:id', component: QuestionnaireDetailComponent, data: {title: 'Questionnaire'}, canActivate: [SurveysFirstGuard]},
  {path: 'checkout', component: CheckoutComponent, data: {title: 'Checkout'}, canActivate: [SurveysFirstGuard]},
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
