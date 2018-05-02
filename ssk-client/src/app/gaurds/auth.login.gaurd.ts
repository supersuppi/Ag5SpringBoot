import { Injectable } from '@angular/core';
import { Router, CanActivate,CanActivateChild,ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AuthenticationService } from '../services/index';
import { User} from '../models/user';
 
@Injectable()
export class AuthGuardLogin implements CanActivate {

  loggedInUser:User;
 
    constructor(private router: Router,private authenticationService: AuthenticationService) { }
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (!this.authenticationService.isLoggedIn()) {
          // not logged in so redirect to login page with the return url and return false
         // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
         this.router.navigate(['/login', { returnUrl: state.url }]);
          return false;
        }
        return true;
      }

}