import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { options } from 'src/environments/environment';
const url='https://alloapp.herokuapp.com/';
@Injectable({
  providedIn: 'root'
})
export class RequetWebService {
  constructor(private http: HttpClient) { }

  get (link,token) {
    const options = {
      headers: {
        'Content-Type' : 'application/json',
        'Access-Control-Allow-Origin' : '*',
        'Authorization' : 'Bearer '+token
      }
    };
    return this.http.get(url+link,options);
  }
  login (link,input) {
    return this.http.post(url+link,input,options);
  }
  post (link,input,token) {
    const options = {
      headers: {
        'Content-Type' : 'application/json',
        'Access-Control-Allow-Origin' : '*',
        'Authorization' : 'Bearer '+token
      }
    };
      return this.http.post(url+link, input, options);
  }
  put (link,input,token) {
    const options = {
      headers: {
        'Content-Type' : 'application/json',
        'Access-Control-Allow-Origin' : '*',
        'Authorization' : 'Bearer '+token
      }
    };
    return this.http.put(url+link,input,options);
  }
  delete (link,token) {
    const options = {
      headers: {
        'Content-Type' : 'application/json',
        'Access-Control-Allow-Origin' : '*',
        'Authorization' : 'Bearer '+token
      }
    };
    return this.http.delete(url+link,options);
  }
}
