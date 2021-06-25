import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `

    <!--**************** Header ****************-->
    <header>
      <!-- Bootstrap Navbar -->
      <nav class="navbar navbar-expand-md fixed-top">
        <div class="container">

          <!-- Brand Name -->
          <a class="navbar-brand ms-5" routerLink="/">MTX</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <!-- Navbar Items -->
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
              <li class="nav-item">
                <a class="nav-link" routerLink="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" routerLink="/contact">Form</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" routerLink="/users">Github-Users</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <!--**************** End Header ****************-->
  `,
  styles: [`
    .navbar {
      background-color: #F4D03F;
    }
    .navbar .navbar-brand {
      font-size: 3rem;
      color: #ECF0F1;
      padding-left: 100px;
    }
    a {
      font-size: 1.5rem;
      color: #ECF0F1;
    }
    .collapse {
      margin-left: 400px;
    }
    .navbar .nav-item a:hover {
      color: #6c757d;
    }
    .navbar .nav-item a:active {
      color: #6c757d;
    }
    header {
      margin-bottom: 100px;
    }
  `]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
