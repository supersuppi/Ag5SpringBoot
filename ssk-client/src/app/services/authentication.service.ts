import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { User} from '../models/user';

//Set headers
const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
      //'Authorization': 'my-auth-token'
    })};
 
@Injectable()
export class AuthenticationService {
    private authUrl = 'http://localhost:8080/ng5server/login';

    constructor(private http:HttpClient) { }

    login(email: string, password: string): Observable<User> {
        return this.http.post<User>(this.authUrl,{ email: email, password: password }, httpOptions);
    }

    logout() {
        localStorage.removeItem('user');
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