import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `

    <!--**************** Home Section ****************-->
    <div class="home text-secondary py-5">
      <div class="py-5">
        <!-- Home Title -->
        <h1 class="display-5 fw-bold">Angular POC</h1>
        <h3>Concepts used:</h3>

        <!-- List of all Angular Concepts used -->
        <ul>
          <li>Services</li>
          <li>Directives</li>
          <li>Modules</li>
          <li>Forms</li>
          <li>Pipes</li>
          <li>Interceptors</li>
          <li>Bootstrap</li>
        </ul>
      </div>
    </div>
    <!--**************** End Home Section ****************-->
  `,
  styles: [`
    .home {
      margin-left: 270px;
    }
    ul li{
      font-size: 20px;
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
