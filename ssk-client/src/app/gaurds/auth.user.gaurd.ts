import { Injectable } from '@angular/core';
import { Router, CanActivate,CanActivateChild,ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AuthenticationService } from '../services/index';
import { User} from '../models/user';
 
@Injectable()
export class AuthGuardUser implements CanActivate {

  loggedInUser:User;
 
    constructor(private router: Router,private authenticationService: AuthenticationService) { }
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let loggedInUser= JSON.parse(localStorage.getItem('user'));
        if (loggedInUser.role === 'USER') {
            return true;		
        } else {
            console.log('Unauthorized to open link: '+ state.url);
            this.router.navigate(['/home']);
            return false;
        }
    }
   
}