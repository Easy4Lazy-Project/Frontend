import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comment:Object;
/*
  private comment ={
    body: 'your question body body body body body',
    name: 'name name',
    creationDate: new Date()
  }
  */
  constructor() { }

  ngOnInit() {
  }

}
