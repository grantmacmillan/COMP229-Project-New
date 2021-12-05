/*
Student IDs: 
  - 301129935
  - 301136902
  - 301180926
  - 301166198
  - 301134374
  - 301153049
WebApp name: Survey Site
Description: User Editor Component - user-editor.component.ts
*/
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/model/auth.service';
import { RestDataSource } from 'src/app/model/rest.datasource';
import { User } from 'src/app/model/user.model';

const PROTOCOL = 'http';
const PORT = 3000;

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html'
})
export class UserEditorComponent implements OnInit {
  
  public errorMessage: string;
  public baseUrl = "";

  userUpdateForm: FormGroup;

  public userId = "";

  public user = {
    username: '',
    email: '',
    displayName: ''
  }

  constructor(private router: Router,
              private fb: FormBuilder,
              private auth: AuthService,
              private activeRoute: ActivatedRoute,
              private datasource: RestDataSource,
              private http: HttpClient,
              public user1: User) 
  {  }
  
  ngOnInit(): void {
   /* console.log(this.auth.getUser2());
    console.log(this.auth.getUser2()._id);
    const id = this.auth.getUser2()._id;
    //const id = this.activeRoute.snapshot.paramMap.get('id');
    console.log(id);
    this.userId = id;

    this.builderForm();

    this.http.get(`${this.baseUrl}admin/main/user-edit/${this.userId}`)
      .subscribe(
        (res: any) => {
          this.user = res.message;
          this.setData();
        },
        (err) => {
          console.log(err);
        }
      );*/
  }

  setData() {
    this.userUpdateForm.get('userName').setValue(this.user.username);
    this.userUpdateForm.get('email').setValue(this.user.email);
    this.userUpdateForm.get('displayName').setValue(this.user.displayName);
  }

  builderForm() {
    this.userUpdateForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      displayName: ['', [Validators.required]]
    });
  }

  get username() {
    return this.userUpdateForm.get('username').value;
  }

  get email() {
    return this.userUpdateForm.get('email').value;
  }

  get displayName() {
    return this.userUpdateForm.get('displayName').value;
  }

  /*updateUser() {
    this.http.patch(`${this.baseUrl}admin/main/user-edit/${this.userId}`, this.userUpdateForm.value).subscribe((res: any) => {
      this.router.navigate(['/admin/main/surveys']);
      console.log(res);
    },
    (err) => {
      console.log(err);
    }
    );
  }*/
  //Saves a Question
  save(form: NgForm): void
  {
    //this.auth.modifyUser(this.user); 
    this.router.navigateByUrl('/admin/main/surveys');
  }
}
