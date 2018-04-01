import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Http,Headers,RequestOptions } from '@angular/http';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable()
export class RestAPIService {

    constructor(private http:HttpClient) { }
    
    postAPICall(data:Object, URL:string): Observable<Object> {
        return this.http.post(URL, data, {
            headers: new HttpHeaders().set('Content-Type', 'application/json')
        });
    } 
 
}