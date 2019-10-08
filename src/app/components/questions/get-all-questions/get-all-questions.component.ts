import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-all-questions',
  templateUrl: './get-all-questions.component.html',
  styleUrls: ['./get-all-questions.component.css']
})
export class GetAllQuestionsComponent implements OnInit {
  private questions = [{
    questionId: 'some',
    like: 20,
    dislike: 20,
    creationDate: new Date(),
    name: "Hedra",
    answerCount: 10,
    tags: "error angular bootstrap",
    body: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas , las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum."
  },
  {
    questionId: 'some',
    like: 20,
    dislike: 20,
    creationDate: new Date(),
    name: "Hedra",
    answerCount: 10,
    tags: "error angular bootstrap",
    body: ""
  },
  {
    questionId: 'some',
    like: 20,
    dislike: 20,
    creationDate: new Date(),
    name: "Hedra",
    answerCount: 10,
    tags: "error angular bootstrap",
    body: ""
  }];

  constructor() {
    for(var i=0;i<this.questions.length; i++){
      if(this.questions[i].body.length> 300){
        this.questions[i]['bodyToShow'] = this.questions[i].body.substring(300,0);
        this.questions[i]['moreBody'] = true;
      }
      else {
        this.questions[i]['bodyToShow'] = this.questions[i].body;
        this.questions[i]['moreBody'] = false;
      }
    }
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
  showLessBody(){

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

}
