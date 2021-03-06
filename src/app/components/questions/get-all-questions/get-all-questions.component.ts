import { Component, OnInit } from '@angular/core';
import {environment} from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from "@angular/router"; 
import { MatSnackBar } from '@angular/material';
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
  search = "";
  constructor(private http:HttpClient, private route:ActivatedRoute, private snack:MatSnackBar) {
    this.questions =[];
    /*
    this.search = this.route.snapshot.paramMap.get("search"); //gettin param
    console.log(this.search);
    if(this.search == undefined || this.search == null || this.search ==""){
      this.getAllQuestions();
    }
    else{
      this.searchQuestions(this.search);
    }
    */
  }
  ngOnInit() {
    this.route.params.subscribe(routeParams => {
      this.search = routeParams.search;
      if(this.search == undefined || this.search == null || this.search ==""){
        this.getAllQuestions();
      }
      else{
        this.searchQuestions(this.search);
      }
    });
  }
  searchQuestions(search){
    let url = `${environment.base_url}content/q/search/${search}`;
      //this.http.get(url).toPromise().then(questions =>{
      this.http.get(url).toPromise().then((data:any) =>{
        console.log("from searching");
        console.log(data);
        if(data.length ==0){
          this.snack.open("We couldn't find any question related to your search :(",null,{duration:5000});
        }
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
