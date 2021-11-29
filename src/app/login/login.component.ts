import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
  <section class="hero is-fullheight is-light">
      <div class="hero-body">
          <div class="container">
              <router-outlet></router-outlet>
          </div>
      </div>
  </section>
  `,
  styles: [`
    .hero-body {
        align-items: flex-start !important;
    }
  `]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
