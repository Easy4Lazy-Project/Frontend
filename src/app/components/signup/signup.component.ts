import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user={
    name: "",
    email: "",
    password: ""
  };
  password2:string;
  constructor() { }

  ngOnInit() {
  }
  signUp(){

  }

}
