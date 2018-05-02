import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Http,Headers,RequestOptions } from '@angular/http';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Order } from '../models/order';

//Set headers
const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer '+localStorage.getItem('token')
    })};

@Injectable()
export class RestAPIService {

    constructor(private http:HttpClient) { }
    
    postAPICall(data:Object, URL:string): Observable<Object> {
        return this.http.post(URL, data, {
            headers: new HttpHeaders().set('Content-Type', 'application/json')
        });
    } 

    stripeCharge(data:Order, URL:string): Observable<Object> {
        return this.http.post(URL, data, httpOptions);
    } 
 
}