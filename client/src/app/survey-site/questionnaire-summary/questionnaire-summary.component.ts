import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Questionnaire } from 'src/app/model/questionnaire.model';

@Component({
  selector: 'app-questionnaire-summary',
  templateUrl: './questionnaire-summary.component.html',
  styleUrls: ['./questionnaire-summary.component.css']
})
export class QuestionnaireSummaryComponent implements OnInit {

  constructor(public questionnaire:Questionnaire,
              public router: Router) { }

  ngOnInit(): void {
  }

  viewCart(): void
  {
    this.router.navigateByUrl('/questionnaire');
  }
}
