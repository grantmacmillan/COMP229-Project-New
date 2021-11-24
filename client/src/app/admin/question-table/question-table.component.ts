import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from 'src/app/model/question.model';
import { QuestionRepository } from 'src/app/model/question.repository';
import { Questionnaire } from 'src/app/model/questionnaire.model';

@Component({
  templateUrl: './question-table.component.html'
})
export class QuestionTableComponent implements OnInit {

  constructor(private repository: QuestionRepository,
              private router: Router,
              public questionnaire: Questionnaire,
              private location: Location) { }

  ngOnInit(): void {
  }

  getQuestions(): Question[]
  {
    return this.repository.getQuestions();
  }

  deleteQuestion(id: number): void
  {
    if(confirm("Are you sure?") && (id !== undefined))
    {
      this.repository.deleteQuestion(id);
    }
    else
    {
      window.location.reload(); //Refresh fix
      this.router.navigateByUrl('/admin/main/questions');
    }
  }

  addQuestion(): void
  {
    this.router.navigateByUrl('/admin/main/questions/add');
  }

  editQuestion(id: number): void
  {
    this.router.navigateByUrl('/admin/main/questions/edit/' + id);
  }

  addQuestionToQuestionnaire(question: Question): void
  {
    this.questionnaire.addLine(question);
    //this.location.back(); // Cannot be this because when I add a book, it goes back to this page. 
    this.router.navigateByUrl('/admin/main/surveys/add');
  }

  cancel(): void
  {
    this.router.navigateByUrl('/admin/main/surveys/add')
  }
}
