import { NgModule, ModuleWithProviders } from '@angular/core';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [],
  imports: []
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ AuthService]
    }
  }
}
