import { Component, Injectable } from '@angular/core';
import { Question } from '../model/question.model';
import { QuestionRepository } from '../model/question.repository';
import { Questionnaire } from '../model/questionnaire.model';
import {Router} from "@angular/router";
import { Location } from '@angular/common';
import { SurveyRepository } from '../model/survey.repository';
import { Survey } from '../model/survey.model';


@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent
{
  public selectedCategory = null;
  public surveysPerPage = 4;
  public selectedPage = 1;
  
  constructor(private repository: QuestionRepository,
              private surveyRepository: SurveyRepository,
              private questionnaire: Questionnaire,
              private router: Router,
              private location: Location) { }

  get surveys(): Survey[]
  {
    const pageIndex = (this.selectedPage - 1) * this.surveysPerPage;
    return this.surveyRepository.getSurveysByCategory(this.selectedCategory)
    .slice(pageIndex, pageIndex + this.surveysPerPage);
  }

  get categories(): string[]
  {
    return this.surveyRepository.getCategories();
  }
 
  changeCategory(newCategory?: string): void
  {
    this.selectedCategory = newCategory;
  }

  changePage(newPage: number) : void
  {
    this.selectedPage = newPage;
  }

  changePageSize(newSize: number): void
  {
    this.surveysPerPage = Number(newSize);
    this.changePage(1);
  }

  get pageCount(): number
  {
    return Math.ceil(this.surveyRepository
      .getSurveysByCategory(this.selectedCategory).length / this.surveysPerPage);
  }

  selectSurvey(id: number): void
  {
    this.router.navigateByUrl('/questionnaire/' + id);
  }
}
