import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import { ActivatedRoute } from "@angular/router"; //for params
import {environment} from 'src/environments/environment';
import { LoginService } from 'src/app/services/login.service';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-get-question',
  templateUrl: './get-question.component.html',
  styleUrls: ['./get-question.component.css']
})
export class GetQuestionComponent implements OnInit {
  showCommentForm:boolean = false;  //for showing the comment form
  questionId ="";
  questionComment = "";
  question:any ={};
  /*= {
    questionId: "1",
    subject: "how to do a project in two days",
    creationDate: "10/05/2019",
    name: "Eduardo Guzman",
    like: 200,
    dislike: 10,
    answerCount: 20,
    myVote: "dislike",
    body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    tags: "tag1 tag2 tag3 tag4 tag5",
    comments:[{
      body: 'comment for your question',
      name: 'Eduardo',
      creationDate: new Date()
    },{
      body: 'comment for your question 2',
      name: 'Eduardo',
      creationDate: new Date()
    }],
    answers:[{
      contentId: 1,
      name: "Hedra",
      body: 'using this version should work properly',
      like: '20',
      dislike: '10',
      creationDate: new Date(),
      myVote: 'dislike',
      comments:[{
        body: 'comment for your answer 1',
        name: 'Eduardo',
        creationDate: new Date()
      },{
        body: 'comment for your answer 2',
        name: 'Eduardo',
        creationDate: new Date()
      }]
    },{
      contentId: 1,
      name: "Hedra",
      body: 'using this version should work properly other time',
      like: '20',
      dislike: '10',
      creationDate: new Date(),
      myVote: 'like',
      comments:[{
        body: 'comment for your answer 3',
        name: 'Eduardo',
        creationDate: new Date()
      },{
        body: 'comment for your answer 4',
        name: 'Eduardo',
        creationDate: new Date()
      }]
    }]
  };*/
  constructor(private http: HttpClient, private route: ActivatedRoute, public loginService: LoginService, private snack:MatSnackBar) {
    this.questionId = this.route.snapshot.paramMap.get("questionId");
    console.log("PARAMS _> " + this.questionId);
    /* commented by now
    */ 
    let url = environment.base_url+"content/q/get/"+this.questionId;
    this.http.get(url).subscribe(data =>{

      this.question =this.orderJson(data);
      console.log(this.question);
    });

  }
  logged(){
    return this.loginService.user.logged;
  }
  orderJson(data){
    let question = {
      id: data[0]['id'],
      subject: data[0]['subject'],
      creationDate: data[0]['creationDate'],
      name: data[0]['name'],
      like: data[0]['likes'],
      dislike: data[0]['dislikes'],
      answerCount: data[0]['answerCount'],
      myVote: '',
      body: data[0]['body'],
      tags: data[0]['tags'],
      answers: [],
      comments:[]
    };
    for(var i =1; i<data.length;i++){
      if(data[i]['contentType_id'] == 2 ){ //answer
        question.answers.push({
          id: data[i]['id'],
          name: data[i]['name'],
          body: data[i]['body'],
          like: data[i]['likes'],
          dislike: data[i]['dislikes'],
          creationDate: data[i]['creationDate'],
          myVote: '',
          comments:[]
        });
      }
      else if(data[i]['contentType_id'] == 3){ //comment
        if(data[i]['content_id'] == question['id']){ //for the question
          question.comments.push({
            body: data[i]['body'],
            name: data[i]['name'],
            creationDate: data[i]['creationDate']
          });
        }
        else{ //for an answer
          for(var j =0; j<question.answers.length; j++){
            if(question.answers[j]['id'] == data[i]['content_id']){
              question.answers[j]['comments'].push({
                body: data[i]['body'],
                name: data[i]['name'],
                creationDate: data[i]['creationDate']
              });
            }
          }
        }
      }
    }
    return question;
  }
  getColor(vote: string,voteType:string){
    if(vote == voteType) return 'primary';
  }

  ngOnInit() {
  }
  vote(type:string){
    if(this.loginService.user.logged == false){
      this.snack.open('You need to log in for voting',null,{duration: 3000});
    }
    else{
      if(this.question['myVote'] == ""){
        console.log("Voting");
        //vote
        let url = `${environment.base_url}content/v/vote/${this.loginService.user.uid}/${this.loginService.user.token}/${this.questionId}/${type}`;
        this.http.post(url,'').subscribe((data:any) =>{
          if(type == '1'){
            this.question.myVote = 'like';
          }
          else{
            this.question.myVote = 'dislike';
          }
        });
      }
    }
  }

  postComment(questionComment:string,questionId:string){
    //questionId = "52"; //debug
    console.log("question comment " + questionComment + ">>" + questionId);
    let url = `${environment.base_url}content/c/${this.loginService.user.uid}/${this.loginService.user.token}/${questionId}/${questionComment}`;
    this.http.post(url,"").subscribe(data =>{
      console.log(data);
      this.question['comments'].push({
        body: questionComment,
        name: this.loginService.user.name,
        creationDate: new Date()
      });
      this.showCommentForm = !this.showCommentForm;  //fadeout comment form
    },error =>{
      console.log(error);
    });
  }
}
