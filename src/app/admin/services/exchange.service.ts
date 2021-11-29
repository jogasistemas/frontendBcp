import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import Exchange from '../../models/exchange.model';
import { environment } from '../../../environments/environment';
import ExchangeR from 'src/app/models/exchangeR.model';
import { map } from 'rxjs/operators';


@Injectable()
export class ExchangeService {
  readonly API = 'api/exchanges';
  readonly BASE_URL = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getAllExchange() {
   
    const headers = { 'Authorization': localStorage.getItem("token") }
    const url = `${this.BASE_URL}/${this.API}/`;
    
     return this.http.get(url, {headers}).pipe(map((exchanges:any)=>{
      return exchanges.map((exchange:ExchangeR) => {
                exchange.currencyOrigin= this.getCurrency(exchange.currencyOrigin);
                exchange.destinationCurrency= this.getCurrency(exchange.destinationCurrency);
      return exchange }) 
    }))

  }
  getExchangeByid(id: string) {
    const headers = { 'Authorization': localStorage.getItem("token") }
    const url = `${this.BASE_URL}/${this.API}/${id}`;

    return this.http.get(url,{headers});
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

    return this.http.post(url, exchange,{headers});
  }

  deleteExchange(id: string) {
    const headers = { 'Authorization': localStorage.getItem("token") }
    const url = `${this.BASE_URL}/${this.API}/${id}`;

    return this.http.delete(url,{headers});
  }

  getCurrency(currency:string): string{
   switch(currency.toUpperCase()) {
    case 'S': 
           return "Soles";
    case 'D':
           return "Dolares";
    default:
          return  "error moneda";
   }
 }
}