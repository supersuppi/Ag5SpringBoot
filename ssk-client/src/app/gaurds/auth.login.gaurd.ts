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
          this.router.navigate(['/login']);
          return false;
        }
        return true;
      }

}