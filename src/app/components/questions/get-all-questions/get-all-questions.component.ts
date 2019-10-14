import { Component, OnInit } from '@angular/core';
import {environment} from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-get-all-questions',
  templateUrl: './get-all-questions.component.html',
  styleUrls: ['./get-all-questions.component.css']
})
export class GetAllQuestionsComponent implements OnInit {
  /*   how I receive from api
body: "I'm ss?"
creationDate: "oct 5, 2019"
dislike: 5
id: 22
likes: 20
name: "Hedra"
subject: "How to kill a service process?"
tags: "c# .net windows"
user_id: 1
*/
  questions:any = [];

  constructor(private http:HttpClient) {
    this.getAllQuestions();
    for(var i=0;i<this.questions.length; i++){
      
    }
    console.log(this.questions);
  }

  ngOnInit() {
  }
  getColor(vote: string,voteType:string){
    if(vote == voteType) return 'primary';
  }
  showMoreBody(question){
    question['bodyToShow'] = question['body'];
    question['moreBody'] = false;
  }
 
  showBody(question:any):string{
    if(question.body.length <300) return question.body;
    else if(question.bodyToShow == undefined || question.bodyToShow== "less"){ //called to more
      question.bodyToShow= "all";
      return question.body;
    }
    else if(question.bodyToShow == "all"){
      question.bodyToShow == "less";
      return question.body.substring(300,0);
    }
  }
  getAllQuestions(){
    //return new Promise((resolve, reject) =>{
      let url = `${environment.base_url}content/q/all`;
      //this.http.get(url).toPromise().then(questions =>{
      this.http.get(url).toPromise().then((data:any) =>{
        for(var i=0; i<data.length; i++){
          //votes part
          if(data[i]['likes'] == undefined){
            data[i]['likes'] = 0;
          }
          if(data[i]['dislike'] == undefined){
            data[i]['dislike'] = 0;
          }
          //Body part

          if(data[i].body.length> 300){
            data[i]['bodyToShow'] = data[i].body.substring(300,0);
            data[i]['moreBody'] = true;
          }
          else {
            data[i]['bodyToShow'] = data[i].body;
            data[i]['moreBody'] = false;
          }

        }
        this.questions = data;
        //console.log(data);
      });
    //});
  }

}
