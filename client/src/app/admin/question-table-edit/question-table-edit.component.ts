/*
Student IDs: 
  - 301129935
  - 301136902
  - 301180926
  - 301166198
  - 301134374
  - 301153049
WebApp name: Survey Site
Description: Question Table Edit Component - question-table-edit.component.ts
*/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from 'src/app/model/question.model';
import { QuestionRepository } from 'src/app/model/question.repository';
import { Questionnaire } from 'src/app/model/questionnaire.model';

@Component({
  selector: 'app-question-table-edit',
  templateUrl: './question-table-edit.component.html'
})
export class QuestionTableEditComponent implements OnInit {

  constructor(private repository: QuestionRepository,
    private router: Router,
    public questionnaire: Questionnaire) { }

  ngOnInit(): void {
  }

  //Get Questions
  getQuestions(): Question[]
  {
    return this.repository.getQuestions();
  }

  //Delete Question
  deleteQuestion(id: number): void
  {
    if(confirm("Are you sure?") && (id !== undefined))
    {
      this.repository.deleteQuestion(id);
    }
    else
    {
      window.location.reload(); 
      this.router.navigateByUrl('/admin/main/questions');
    }
  }

  //Go to Edit Question
  editQuestion(id: number): void
  {
    this.router.navigateByUrl('/admin/main/questions/edit/' + id);
  }

  //Add Question to Questionnaire
  addQuestionToQuestionnaire(question: Question): void
  {
    this.questionnaire.addLine(question);
  }
}
