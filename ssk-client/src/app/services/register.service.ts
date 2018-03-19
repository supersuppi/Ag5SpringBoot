import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RegistrationService {

    private regUrl = 'http://localhost:8080/ng5server/register';

    constructor(private http:Http) {}
    
    resgisterAPICall(data:Object): Observable<Object> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.regUrl, data, options)
                   .map(this.extractData)
                   .catch(this.handleErrorObservable);
    } 
    
    extractData(res: Response) {
        let body = res.json();
        return body || {};
      }
    
    handleErrorObservable (error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
      } 
}