import { Component, OnInit } from '@angular/core';

import ExchangeR from 'src/app/models/exchangeR.model';
import { ExchangeService } from '../services/exchange.service';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-exchanges',
  templateUrl: './exchanges.component.html',
  styleUrls: ['./exchanges.component.css']
})
export class ExchangesComponent implements OnInit {

  titlesTable: string[] = ['identificador', 'monto', 'Moneda de origen', 'Moneda de Destino', 'Monto ya cambiado', 'tipo de cambio'];
  exchangesR: ExchangeR[];


  constructor(private exchangeService: ExchangeService) { }

  ngOnInit() {


    this.exchangeService.getAllExchange().subscribe((exchangesR: any) => {
      console.log("lista de exchanges : "+JSON.stringify( exchangesR));
      this.exchangesR= exchangesR;
    });
  }

  onDeleteExchange(exchangeR: ExchangeR) {
    this.exchangeService.deleteExchange(exchangeR.id).subscribe(res => {
      this.exchangesR = this.exchangesR.filter(prod => prod.id !== exchangeR.id);
    });
  }

}
