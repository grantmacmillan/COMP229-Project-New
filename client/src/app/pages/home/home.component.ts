import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from 'src/app/partials/base-page/base-page.component';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/model/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends BasePageComponent implements OnInit {

  user: User;

  constructor(route: ActivatedRoute,
              private authService: AuthService,
              private router: Router) { 
    super(route);
  }

  override ngOnInit(): void {
    this.user = new User();
  }

  onLogoutClick() : void
  {
    this.authService.logout().subscribe(data => {
      this.router.navigate(['/login']); //Takes user back to login page
      });
  }

  isLoggedIn(): boolean
  {
    const result = this.authService.authenticated;
    if(result)
    {
      this.user = JSON.parse(localStorage.getItem('user'));
    }
    return result;
  }

}
