import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

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
  constructor(public loginService:LoginService) { }
  postQuestion(){
    console.log("nothing to do");
  }

  ngOnInit() {
  }

}
