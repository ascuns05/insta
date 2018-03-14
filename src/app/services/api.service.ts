import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  getUser(username:String):Observable<any> {
    return this.http.get(`https://api.github.com/users/${username}`).map(res => res.json());
  }

  get(url, paramsObj?):Observable<any> {
    let params:String = '';
    if (paramsObj) {
      for (let key in paramsObj) {
        params += key + '=' + paramsObj[key] + '&';
      }
    }
    return  this.http.get(url + params).map(res => res.json())
  }
  post(url, paramsObj?) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    return  this.http.post(`${url}`, paramsObj).map(res => res.json())
  }

}
