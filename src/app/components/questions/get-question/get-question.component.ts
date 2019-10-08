import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import { ActivatedRoute } from "@angular/router"; //for params
import {environment} from 'src/environments/environment';
@Component({
  selector: 'app-get-question',
  templateUrl: './get-question.component.html',
  styleUrls: ['./get-question.component.css']
})
export class GetQuestionComponent implements OnInit {
  private questionId ="";
  private question:any = {
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
  };
  constructor(private http: HttpClient, private route: ActivatedRoute) {
    /* commented by now
    this.questionId = this.route.snapshot.paramMap.get("questionId");
    let url = environment.base_url+"getQuestion?id="+this.questionId;
    this.http.get(url).toPromise().then(question =>{
      this.question =question;
    });

    */ 
  }
  getColor(vote: string,voteType:string){
    if(vote == voteType) return 'primary';
  }

  ngOnInit() {
  }
  vote(){
    if(this.question['myVote'] == ""){
      console.log("Voting");
      //vote
    }
    else{
      console.log("updating Vote");
      //update vote
    }
  }

}
