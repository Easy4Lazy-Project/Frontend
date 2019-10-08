import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private email:string = "";
  private password:string="";
  constructor(private loginService: LoginService) { }
  login(){
    this.loginService.login2(this.email,this.password);
  }
  ngOnInit() {
  }

}
