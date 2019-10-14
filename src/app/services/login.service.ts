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
    uid: 1,
    email: "jcorona@mum.edu",
    token: "",
    name: 'Eduardo',
    logged: false
  }
  constructor(protected http: HttpClient) { }
  login(email:string, password:string):Promise<Object>{
    return new Promise((resolve, reject)=>{  
      let url=`${environment.base_url}user/login/${email}/${password}`;
      this.http.post(url,"").toPromise().then(data =>{
        console.log(data);
        //data = JSON.parse(data);
        if(data.hasOwnProperty('token') && data.hasOwnProperty('userId')){  //check if is uid
          //logged
          this.user.uid = data['userId'];
          this.user.email = email;
          this.user.token = data['token'];
          //this.user.name = data[''] //pendiente hasta saber el nombre de la propiedad
          this.user.logged = true;
          resolve({status: true});
        }
        else{
          //error
          resolve({error:'Email or password incorrect'});
        }
        //console.log("data received " + data);
      });
    });
    //this.http.get(environment.base_url+"login/",httpOptions).then
  }

  logOut(){
    return new Promise((resolve, reject)=>{
      let url=`${environment.base_url}user/logout/${this.user.uid}`;
      this.http.get(url).toPromise().then(data =>{
        this.user = {
          uid: 0,
          email: "",
          token: "",
          name: "",
          logged: false
        }
        resolve(true);
      });
    });
  }
/*
  login2(email:string, password:string){
    let params = new HttpParams();
    params.set('email',email);
    params.set('password',password);
    let url = 'https://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=b6907d289e10d714a6e88b30761fae22';
    url = "http://dummy.restapiexample.com/api/v1/employees";
    //this.http.get(url).toPromise().then(data => console.log(data)); //good one
  }
*/
}
