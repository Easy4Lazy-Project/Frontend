import { Component, OnInit, Input } from '@angular/core';
import {environment} from '../../../../environments/environment';
import { LoginService } from 'src/app/services/login.service';
import {HttpClient, HttpParams} from "@angular/common/http";
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-get-answer',
  templateUrl: './get-answer.component.html',
  styleUrls: ['./get-answer.component.css']
})
export class GetAnswerComponent implements OnInit {
  showCommentForm: boolean = false;
  @Input() answer:object;
  questionComment ="";

  constructor(private loginService:LoginService, private http:HttpClient, private snack:MatSnackBar) { 
    //console.log("Checking answer");
    //console.log(this.answer);
  }
  logged(){
    return this.loginService.user.logged;
  }

  ngOnInit() {
  }
  getColor(vote: string,voteType:string){
    if(vote == voteType) return 'primary';
  }
  vote(type:string){
    if(this.answer['myVote'] == ""){
      if(!this.loginService.user.logged){
        this.snack.open('You need to log in for voting',null,{duration: 3000});
      }
      else{
        let url = `${environment.base_url}content/v/vote/${this.loginService.user.uid}/${this.loginService.user.token}/${this.answer['id']}/${type}`;
        this.http.post(url,'').subscribe((data:any) =>{
          if(type == '1'){
            this.answer['myVote'] = 'like';
          }
          else{
            this.answer['myVote'] = 'dislike';
          }
        });
        console.log("Voting");
      }
      //vote
    }
  }
  postComment(answerComment:string,answerId:string){
    //answerId = "55"; //debug
    let url = `${environment.base_url}content/c/${this.loginService.user.uid}/${this.loginService.user.token}/${answerId}/${answerComment}`;
    this.http.post(url,"").subscribe(data =>{
      console.log(data);
      this.answer['comments'].push({
        body: answerComment,
        name: this.loginService.user.name,
        creationDate: new Date()
      });
      this.showCommentForm = !this.showCommentForm;  //fadeout comment form
    },error =>{
      console.log(error);
    });
  }

}
