import { Injectable } from '@angular/core';
import {Http,Headers,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
 
@Injectable()
export class AuthenticationService {
    private authUrl = 'http://localhost:8080/ng5server/authenticate';
    
    constructor(private http:Http) { }
 
    // login(email: string, password: string) {
    //     return this.http.post<any>('/api/authenticate', { email: email, password: password })
    //         .map(user => {
    //             // login successful if there's a jwt token in the response
    //             if (user && user.token) {
    //                 // store user details and jwt token in local storage to keep user logged in between page refreshes
    //                 localStorage.setItem('currentUser', JSON.stringify(user));
    //             }
 
    //             return user;
    //         });
    // }

    login(email: string, password: string): Observable<Object> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.authUrl,{ email: email, password: password }, options);
    } 
 
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}