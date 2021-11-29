import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly API = 'api/token/user';
  readonly BASE_URL = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getUser(username: string, password: string) {

  /*  const headers = { 'Access-Control-Allow-Headers': 'Content-Type',
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
     }
     */
    const url = `${this.BASE_URL}/${this.API}?username=${username}&password=${password}`;

    return this.http.post(url,{body:''});
  }

}
