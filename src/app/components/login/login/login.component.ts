import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string = "";
  password:string="";
  constructor(private loginService: LoginService, private router: Router, private snack:MatSnackBar) {
    console.log("logged " + this.loginService.user.logged);
  }
  login(){
    this.loginService.login(this.email,this.password).then(data =>{
      if(data.hasOwnProperty('error')){
        //an error happend
        this.snack.open(data['error'],null,{duration:5000});  //showing the error to the user
      }
      else if(data.hasOwnProperty('status')){
        //logged correctly
        this.router.navigate(['home']);
      }
    });
  }
  ngOnInit() {
  }

}
