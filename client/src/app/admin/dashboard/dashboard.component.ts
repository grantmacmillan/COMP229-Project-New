import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/model/auth.service';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  constructor(public user:User,
              private router: Router,
              private auth: AuthService,
              private activeRoute: ActivatedRoute) 
              {
                
              }

  ngOnInit(): void {
  }

  
}
