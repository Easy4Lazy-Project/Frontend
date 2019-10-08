import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  private user={
    name: "",
    email: "",
    password: ""
  };
  private password2;
  constructor() { }

  ngOnInit() {
  }
  signUp(){

  }

}
