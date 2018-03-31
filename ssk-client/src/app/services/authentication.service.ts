import { Injectable } from '@angular/core';
import {Http,Headers,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
 
@Injectable()
export class AuthenticationService {
    private authUrl = 'http://localhost:8080/ng5server/login';
    
    constructor(private http:Http) { }

    login(email: string, password: string): Observable<Object> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.authUrl,{ email: email, password: password }, options);
    }

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedin');
    }

    isLoggedIn() {
        if(localStorage.getItem('loggedin') === 'true') {
          return true;
        } else {
          return false;
        }
      }

}