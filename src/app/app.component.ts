import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <!-- Header -->
    <app-header></app-header>
    
    <!-- Routers -->
    <router-outlet></router-outlet>

    <!-- Footer -->
    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {
  constructor() {}
}
