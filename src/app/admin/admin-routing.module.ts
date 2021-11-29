import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExchangesComponent } from './exchanges/exchanges.component';
import { ExchangeNewComponent } from './exchange-new/exchange-new.component';
import { ExchangeEditComponent } from './exchange-edit/exchange-edit.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'exchanges',
        component: ExchangesComponent
      },
      {
        path: 'exchanges/new',
        component: ExchangeNewComponent
      },
      {
        path: 'exchanges/:id',
        component: ExchangeEditComponent
      },
      {
        path: '',
        redirectTo: 'exchanges',
        pathMatch: 'full'
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
