import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import Exchange from '../../../models/exchange.model';

@Component({
  selector: 'app-exchange-form',
  templateUrl: './exchange-form.component.html',
  styleUrls: ['./exchange-form.component.css']
})
export class ExchangeFormComponent implements OnInit {
  exchangeForm;
  isLoading: boolean = false;

  @Input() model: Exchange;
  @Output() completedform: EventEmitter<Exchange> = new EventEmitter<Exchange>();

  constructor(private location: Location) { }

  ngOnInit() {
    this.exchangeForm = new FormGroup({
      amount: new FormControl(this.model.amount || '', [
        Validators.required,Validators.min(0.0)
      ]),
      currencyOrigin: new FormControl(this.model.currencyOrigin  || '', [
        Validators.required
      ]),
      typeExchange: new FormControl(this.model.typeExchange  || '', [
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
      if (this.model.id) {
        value.id = this.model.id;
      }
      console.log('pintar usuario :'+ JSON.stringify(value));
      this.completedform.emit(value);
    }
  }

}
