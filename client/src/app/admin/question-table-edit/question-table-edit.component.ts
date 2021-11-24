import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from 'src/app/model/question.model';
import { QuestionRepository } from 'src/app/model/question.repository';
import { Questionnaire } from 'src/app/model/questionnaire.model';

@Component({
  selector: 'app-question-table-edit',
  templateUrl: './question-table-edit.component.html',
  styleUrls: ['./question-table-edit.component.css']
})
export class QuestionTableEditComponent implements OnInit {

  constructor(private repository: QuestionRepository,
    private router: Router,
    public questionnaire: Questionnaire) { }

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
      window.location.reload(); 
      this.router.navigateByUrl('/admin/main/questions');
    }
  }

  addQuestion(): void
  {
    //this.router.navigateByUrl('/admin/main/questions/a/add');
  }

  editQuestion(id: number): void
  {
    this.router.navigateByUrl('/admin/main/questions/edit/' + id);
  }

  addQuestionToQuestionnaire(question: Question): void
  {
    this.questionnaire.addLine(question);
    //this.location.back(); // Cannot be this because when I add a question, it goes back to this page. 
    //this.router.navigateByUrl('/admin/main/surveys/add');
  }
}
