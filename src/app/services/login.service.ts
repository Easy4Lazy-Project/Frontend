import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpParams} from "@angular/common/http";
//import 'rxjs/add/operator/toPromise';

//import { HttpClient, HttpHeaders, HttpRequest, HttpParams, HttpResponse, HttpParameterCodec } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public user = {
    email: "jcorona@mum.edu",
    token: "",
    name: 'Eduardo',
    logged: true
  }
  constructor(protected http: HttpClient) { }
  login(email:string, password:string){
    let httpOptions ={
      params: {
        email: email,
        password: password
      }
    };
    //this.http.get(environment.base_url+"login/",httpOptions).then
  }

  logOut(){
    return new Promise((resolve, reject)=>{
      //add logic
      this.user = {
        email: "",
        token: "",
        name: "",
        logged: false
      }
      resolve(true);
    });
  }

  login2(email:string, password:string){
    let params = new HttpParams();
    params.set('email',email);
    params.set('password',password);
    let url = 'https://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=b6907d289e10d714a6e88b30761fae22';
    url = "http://dummy.restapiexample.com/api/v1/employees";
    //this.http.get(url).toPromise().then(data => console.log(data)); //good one
  }

}
