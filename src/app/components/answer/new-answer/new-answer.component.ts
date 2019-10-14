import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-new-answer',
  templateUrl: './new-answer.component.html',
  
  styleUrls: ['./new-answer.component.css']
})
export class NewAnswerComponent implements OnInit {
  @Input() questionId:number;
  answer:string ="";
  constructor(public loginService: LoginService, private http:HttpClient, private router:Router, private snack:MatSnackBar) {
   }

  ngOnInit() {
  }
  postAnswer(){
    //this.questionId = 52; //debug
    let url = `${environment.base_url}/post/a/${this.loginService.user.uid}/${this.loginService.user.token}/${this.questionId}/${this.answer}`;
    this.http.post(url,{}).subscribe(data =>{
      this.snack.open('Answer sent correctly.');
      console.log(data);
    },error => {
      console.log("some error happend");
    });
  }
  sendToLogin(){
    this.router.navigate(['login']);
  }

}
