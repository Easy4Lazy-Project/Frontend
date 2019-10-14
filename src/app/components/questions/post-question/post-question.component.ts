import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from '../../../../environments/environment';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
@Component({
  selector: 'app-post-question',
  templateUrl: './post-question.component.html',
  styleUrls: ['./post-question.component.css']
})
export class PostQuestionComponent implements OnInit {
  question= {
    subject: "",
    body: "",
    tags: ""
  };
  constructor(public loginService:LoginService, private http:HttpClient, private snack:MatSnackBar, private router:Router) { }
  postQuestion(){
    //create params
    let url =  `${environment.base_url}content/q/${this.loginService.user.uid}/${this.loginService.user.token}/${this.question.body}/${this.question.subject}/${this.question.tags}`;
    this.http.post(url,this.question).subscribe(data =>{
      this.snack.open("Question created!");
      this.router.navigate(['question/'+data['contentId']]);
      console.log(data);
    },
    error =>{
      console.log("Some error happend");
      console.error(error);
    });
  }

  ngOnInit() {
  }

}
