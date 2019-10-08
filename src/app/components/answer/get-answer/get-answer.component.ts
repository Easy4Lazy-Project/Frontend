import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-get-answer',
  templateUrl: './get-answer.component.html',
  styleUrls: ['./get-answer.component.css']
})
export class GetAnswerComponent implements OnInit {
  @Input() answer:object;
  /*private answer={
    contentId: 1,
    name: "Hedra",
    body: 'using this version should work properly',
    like: '20',
    dislike: '10',
    creationDate: new Date(),
    myVote: 'like',
    comments:[{
      body: 'comment for your answer',
      name: 'Eduardo',
      creationDate: new Date()
    },{
      body: 'comment for your answer',
      name: 'Eduardo',
      creationDate: new Date()
    }]
  };
  */
  constructor() { 
    //console.log("Checking answer");
    //console.log(this.answer);
  }

  ngOnInit() {
  }
  getColor(vote: string,voteType:string){
    if(vote == voteType) return 'primary';
  }
  vote(){
    if(this.answer['myVote'] == ""){
      console.log("Voting");
      //vote
    }
    else{
      console.log("updating Vote");
      //update vote
    }
  }

}
