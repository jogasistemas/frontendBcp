import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import Exchange from '../../../models/exchange.model';
import Currency from 'src/app/models/currency.model';

@Component({
  selector: 'app-exchange-form',
  templateUrl: './exchange-form.component.html',
  styleUrls: ['./exchange-form.component.css']
})
export class ExchangeFormComponent implements OnInit {
  exchangeForm;
  isLoading: boolean = false;

  @Input() model: Currency[];
  @Input() exchange: Exchange;
  @Output() completedform: EventEmitter<Exchange> = new EventEmitter<Exchange>();

  constructor(private location: Location) { }

  ngOnInit() {
    this.exchangeForm = new FormGroup({
      amount: new FormControl(this.exchange.amount || '', [
        Validators.required,Validators.min(0.0)
      ]),
      currencyOrigin: new FormControl(this.exchange.currencyOrigin  || '', [
        Validators.required
      ]),
      typeExchange: new FormControl(this.exchange.typeExchange  || '', [
        Validators.required,Validators.min(0.0)
      ])
    });
  }
   
  onBack() {
    this.location.back();
  }

  onSubmit(e) {
    e.preventDefault();
    
    const { value, valid } = this.exchangeForm;
    this.isLoading = true;

    if (valid) {
      if (this.exchange.id) {
        value.id = this.exchange.id;
      }
      console.log('pintar usuario :'+ JSON.stringify(value));
      this.completedform.emit(value);
    }
  }

}
