/*
Student IDs: 
  - 301129935
  - 301136902
  - 301180926
  - 301166198
  - 301134374
  - 301153049
WebApp name: Survey Site
Description: Question Table Component - question-table.component.ts
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from 'src/app/model/question.model';
import { QuestionRepository } from 'src/app/model/question.repository';
import { Questionnaire, QuestionnaireLine } from 'src/app/model/questionnaire.model';

@Component({
  templateUrl: './question-table.component.html'
})
export class QuestionTableComponent implements OnInit {

  constructor(private repository: QuestionRepository,
              private router: Router,
              public questionnaire: Questionnaire) { }

  ngOnInit(): void { }

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

  //Edit Question
  editQuestion(id: number): void
  {
    this.router.navigateByUrl('/admin/main/questions/edit/' + id);
  }

  //Add Question to Questionnaire
  addQuestionToQuestionnaire(question: Question): void
  {
    this.questionnaire.lines.push(new QuestionnaireLine(question, ""));
    this.router.navigateByUrl('/admin/main/surveys/add');
  }
}
