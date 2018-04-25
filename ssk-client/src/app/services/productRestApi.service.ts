import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Package } from '../models/package';

//Set headers
const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
      //'Authorization': 'my-auth-token'
    })};
 
@Injectable()
export class ProductRestAPIService {
    private packageUrl = 'http://localhost:8080/ng5server/package';

    constructor(private http:HttpClient) { }

    getProducts(): Observable<Package[]> {
        return this.http.get<Package[]>(this.packageUrl);
    }

}