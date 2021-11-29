import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-admin',
  template: `
    <app-header></app-header>
    <section class="hero is-fullheight-with-navbar is-light">
        <div class="hero-body">
            <div class="container">
                <router-outlet></router-outlet>
            </div>
        </div>
        <div class="hero-foot">
            <app-footer></app-footer>
        </div>
    </section>
  `,
  styles: [`
    .hero-body {
        align-items: flex-start !important;
    }
  `]
})
export class AdminComponent implements OnInit {
  user: User;
  constructor(
  ) { }

  ngOnInit() {
  }
  

}
