import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { ExchangeService } from './services/exchange.service';
import { ExchangeEditComponent } from './exchange-edit/exchange-edit.component';
import { ExchangeNewComponent } from './exchange-new/exchange-new.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ExchangeFormComponent } from './common/exchange-form/exchange-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExchangesComponent } from './exchanges/exchanges.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ExchangesComponent,
    ExchangeEditComponent,
    ExchangeNewComponent,
    AdminComponent,
    ExchangeFormComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    ExchangeService
  ]
})
export class AdminModule { }
