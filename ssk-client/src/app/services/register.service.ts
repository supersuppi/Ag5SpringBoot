import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Http,Headers,RequestOptions } from '@angular/http';

@Injectable()
export class RegistrationService {

    private regUrl = 'http://localhost:8080/ng5server/register';

    constructor(private http:Http) {}
    
    resgisterAPICall(data:Object): Observable<Object> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.regUrl, data, options);
    } 
 
}