import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions}       from '@angular/http';
import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/toPromise';

import { Order } from './order';

@Injectable()
export class AppService {
    // private getOrdersUrl = 'http://foodappetency.com:9000/api/orders&prefix=JSONP_CALLBACK';  // URL to web api
    // private headers = new Headers({
    //     'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTQ5ODM2NzA5OH0.OXzfZSBA4xNKCw7ABqjgQ43MaJyn950BhQyDfIqXiwBCigBX_FJD8mtu0koeuwhI5PwMF19oB9lR4OTZ7X7-1A',

    // });

    // private options = new RequestOptions({
    //     headers: this.headers
    // });

    // constructor(private http: Http) { }

    // getOrders(): Promise<Order[]> {
    //     return this.http.get(this.getOrdersUrl, this.options)
    //            .toPromise() 
    //            .then(response => response.json().data as Order[])
    //            .catch(this.handleError);
    // };

    //  private handleError(error: any): Promise<any> {
    //     console.error('An error occurred', error); // for demo purposes only
    //     return Promise.reject(error.message || error);
    // }

    private getOrderUrl = 'http://foodappetency.com:9000/api/orders?callback=JSONP_CALLBACK';
    private headers = new Headers({
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTQ5ODM2NzA5OH0.OXzfZSBA4xNKCw7ABqjgQ43MaJyn950BhQyDfIqXiwBCigBX_FJD8mtu0koeuwhI5PwMF19oB9lR4OTZ7X7-1A',
    });

    private options = new RequestOptions({
        headers: this.headers
    });

    constructor(private http:Http){}

    getOrders(): Observable<Order[]>{
        return this.http.get(this.getOrderUrl, this.options)
            .map(this.handleSuccess)
            .catch(this.handleError);

    };

    private handleSuccess(res: any): Observable<any> {
        let body = res.json();
        return body || {};
    } 

    private handleError(error: any): Observable<any> {
        console.error('An error occurred', error);
        return Observable.throw(error);
    } 
}