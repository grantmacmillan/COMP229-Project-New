/*
Student IDs: 
  - 301129935
  - 301136902
  - 301180926
  - 301166198
  - 301134374
  - 301153049
WebApp name: Survey Site
Description: Question Editor Component - question-editor.component.ts
*/
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from 'src/app/model/question.model';
import { QuestionRepository } from 'src/app/model/question.repository';
import { Questionnaire } from 'src/app/model/questionnaire.model';

@Component({
  templateUrl: './question-editor.component.html'
})
export class QuestionEditorComponent implements OnInit {

  editing = false;
  question: Question = new Question();

  constructor(private repository: QuestionRepository,
              private router: Router,
              activeRoute: ActivatedRoute,
              public questionnaire: Questionnaire) 
  {
    this.editing = activeRoute.snapshot.params.mode === 'edit'; 

    if(this.editing)
    {
      Object.assign(this.question, repository.getQuestion(activeRoute.snapshot.params.id));
    }
  }

  ngOnInit(): void { }

  //Saves a Question
  save(form: NgForm): void
  {
    this.repository.saveQuestion(this.question); 
    this.router.navigateByUrl('/admin/main/questions');
  }
}
