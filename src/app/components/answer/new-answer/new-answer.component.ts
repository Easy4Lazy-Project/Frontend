import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-new-answer',
  templateUrl: './new-answer.component.html',
  
  styleUrls: ['./new-answer.component.css']
})
export class NewAnswerComponent implements OnInit {
  @Input() questionId:number;
  constructor(private loginService: LoginService) {
   }

  ngOnInit() {
  }
  postAnswer(){
    console.log(this.questionId);
  }

}
