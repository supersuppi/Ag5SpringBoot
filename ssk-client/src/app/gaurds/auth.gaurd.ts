import { Injectable } from '@angular/core';
import { Router, CanActivate} from '@angular/router';
import {AuthenticationService } from '../services/index';
 
@Injectable()
export class AuthGuard implements CanActivate {
 
    constructor(private router: Router,private authenticationService: AuthenticationService) { }
 
    canActivate(): boolean {
        if (!this.authenticationService.isLoggedIn()) {
          this.router.navigate(['/login']);
          return false;
        }
        return true;
      }
}