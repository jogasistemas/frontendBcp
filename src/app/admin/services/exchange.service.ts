import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import Exchange from '../../models/exchange.model';
import { environment } from '../../../environments/environment';


@Injectable()
export class ExchangeService {
  readonly API = 'exchanges';
  readonly BASE_URL = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getAllExchange() {
    const headers = { 'Authorization': localStorage.getItem("token") }
    const url = `${this.BASE_URL}/${this.API}/`;
    
    return this.http.get(url, {headers}); 
  } 

  getExchangeByid(id: string) {
    const url = `${this.BASE_URL}/${this.API}/${id}`;

    return this.http.get(url);
  }

  createExchange(exchange: Exchange) {
    const headers = { 'Authorization': localStorage.getItem("token") }
    const url = `${this.BASE_URL}/${this.API}/`;
   console.log("task"+JSON.stringify(exchange));
    return this.http.post(url, exchange,{headers});
  }

  updateExchange(exchange: Exchange) {
    const headers = { 'Authorization': localStorage.getItem("token") }
    const url = `${this.BASE_URL}/${this.API}/${exchange.id}`;

    return this.http.put(url, exchange,{headers});
  }

  deleteExchange(id: string) {
    const headers = { 'Authorization': localStorage.getItem("token") }
    const url = `${this.BASE_URL}/${this.API}/${id}`;

    return this.http.delete(url,{headers});
  }

}