import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpParams} from "@angular/common/http";
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user={
    name: "",
    email: "",
    pwd: ""
  };
  pwd2:string;
  constructor(private snack:MatSnackBar, private http:HttpClient, private router: Router) { }

  ngOnInit() {
  }
  signUpOLD(){
    if(this.pwd2 == this.user.pwd){
      //logic to create user
      let url = `${environment.base_url}user/create`;
      let httpParams = new HttpParams({ fromObject: this.user });
      
      this.http.post(url,httpParams).toPromise().then(data =>{
      //this.http.post(url,"").toPromise().then(data =>{
        console.log("received from signup");
        console.log(data);
        if(data['created']){ // check how to change this if
          this.snack.open("User created!",null,{duration:3000});
          this.router.navigate(['login']);
        }
      });
    }
    else{
      //different passwords
      this.snack.open("The passwords are different", null,{duration:4000});
    }
  }
  signUp(){
    if(this.pwd2 == this.user.pwd){
      //logic to create user
      let url = `${environment.base_url}user/create`;
      let httpParams = new HttpParams({ fromObject: this.user });
      
      this.http.post(url,this.user).subscribe(data =>{
          this.snack.open("User created!",null,{duration:3000});
          this.router.navigate(['login']);
      },
      error => {
        this.snack.open("This email already exists in our database",null,{duration:3000});
        //console.log("Some error happend");
        //console.log(error);
      });
    }
    else{
      //different passwords
      this.snack.open("The passwords are different", null,{duration:4000});
    }
  }
}
