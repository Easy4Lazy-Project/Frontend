import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private username = "Eduardo";
  public searchtext = "";
  constructor(public loginService: LoginService, private router: Router) {
    //console.log(loginService.user);
   }

  ngOnInit() {
  }
  logOut(){
    this.loginService.logOut().then(data =>{
      this.router.navigate(['login']);
    });
  }
  logIn(){
    //console.log("login function");
    this.router.navigate(['login']);
  }
  signUp(){
    //console.log("signup function");
    this.router.navigate(['signup']);
  }
  search(){
    this.router.navigate(['search/'+this.searchtext]);
  }
  getDashboard(){
    this.router.navigate(['dashboard']);
  }
}
