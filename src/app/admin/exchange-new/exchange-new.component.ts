import { Component, OnInit } from '@angular/core';
import Exchange from 'src/app/models/exchange.model';
import { ExchangeService } from '../services/exchange.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-exchange-new',
  templateUrl: './exchange-new.component.html',
  styleUrls: ['./exchange-new.component.css']
})
export class ExchangeNewComponent implements OnInit {

  exchange: Exchange;
  users: User[];
  constructor(
    private router: Router,
    private exchangeService: ExchangeService
  ) { }

  ngOnInit() {
    this.exchange = {
      id: '',
      amount: 0,
      currencyOrigin: '',
      typeExchange:4.0
    };
  }

  onSaveExchange(exchange: Exchange) {
    console.log('exchange '+ JSON.stringify(exchange));
    this.exchangeService.createExchange(exchange).subscribe(res => {
      console.log('entro');
      this.router.navigate(['/admin/exchanges']);
    });
  }

}
