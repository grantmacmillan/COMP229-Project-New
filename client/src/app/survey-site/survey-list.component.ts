/*
Student IDs: 
  - 301129935
  - 301136902
  - 301180926
  - 301166198
  - 301134374
  - 301153049
WebApp name: Survey Site
Description: Survey-List Component - survey-list.component.ts
*/
import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { SurveyRepository } from '../model/survey.repository';
import { Survey } from '../model/survey.model';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html'
})
export class SurveyListComponent
{
  public selectedCategory = null;
  public surveysPerPage = 4;
  public selectedPage = 1;
  
  constructor(private surveyRepository: SurveyRepository,
              private router: Router) { }

  //Gets Surveys from the Survey Repository
  get surveys(): Survey[] {
    const pageIndex = (this.selectedPage - 1) * this.surveysPerPage;
    return this.surveyRepository.getSurveysByCategory(this.selectedCategory)
    .slice(pageIndex, pageIndex + this.surveysPerPage);
  }

  //Gets Categories from the Survey Repository
  get categories(): string[] {
    return this.surveyRepository.getCategories();
  }
 
  //Changes the category to the selected one
  changeCategory(newCategory?: string): void {
    this.selectedCategory = newCategory; 
  }

  //Changes the page to the selected one
  changePage(newPage: number) : void {
    this.selectedPage = newPage;
  }

  //Changes the page size based on surveys per page
  changePageSize(newSize: number): void {
    this.surveysPerPage = Number(newSize);
    this.changePage(1);
  }

  //Gets a page count
  get pageCount(): number {
    return Math.ceil(this.surveyRepository
      .getSurveysByCategory(this.selectedCategory).length / this.surveysPerPage);
  }

  //Navigates to the questionnaire component and passes the selected survey ID
  selectSurvey(id: number): void {
    this.router.navigateByUrl('/questionnaire/' + id);
  }
}
