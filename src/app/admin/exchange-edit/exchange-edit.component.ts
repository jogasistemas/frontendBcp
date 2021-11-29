import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { ExchangeService } from '../services/exchange.service';

import Exchange from '../../models/exchange.model';

@Component({
  selector: 'app-exchange-edit',
  templateUrl: './exchange-edit.component.html',
  styleUrls: ['./exchange-edit.component.css']
})
export class ExchangeEditComponent implements OnInit {
  exchange: Exchange;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private exchangeService: ExchangeService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.exchangeService.getExchangeByid(params.get('id'))
        .subscribe((exchange: Exchange) => this.exchange =  exchange);
    });

  }

  onSaveExchange(exchange: Exchange) {
    this.exchangeService.updateExchange(exchange).subscribe(res => {
      console.log('update : '+ JSON.stringify(exchange));
      this.router.navigate(['/admin']);
    });
  }

}
