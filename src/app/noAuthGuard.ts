import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './services/login.service';
//import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class noAuthGuard implements CanActivate {
  constructor(private router: Router, private loginService: LoginService)
  {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean | UrlTree {
      if(!this.loginService.user.logged){
        console.log(this.loginService.user.logged);
          return !this.loginService.user.logged;
      }
      else{
          console.log("returning to home");
        return this.router.parseUrl("/home");
      }

  }
}