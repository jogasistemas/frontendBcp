import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { ExchangeService } from '../services/exchange.service';

import Exchange from '../../models/exchange.model';
import Currency from 'src/app/models/currency.model';

@Component({
  selector: 'app-exchange-edit',
  templateUrl: './exchange-edit.component.html',
  styleUrls: ['./exchange-edit.component.css']
})
export class ExchangeEditComponent implements OnInit {
  exchange: Exchange;
  currencies: Currency[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private exchangeService: ExchangeService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.exchangeService.getExchangeByid(params.get('id'))
        .subscribe((data: any) =>{this.exchange =  data.data;
        });
    });

    this.currencies=[{currency:'S'},{currency:'D'}]
  }

  onSaveExchange(exchange: Exchange) {
    this.exchangeService.updateExchange(exchange).subscribe(res => {
      console.log('update : '+ JSON.stringify(exchange));
      this.router.navigate(['/admin']);
    });
  }

}
