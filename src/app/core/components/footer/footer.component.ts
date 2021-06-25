import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `

    <!--**************** Footer ****************-->
    <footer class="footer py-3 mt-3">
      <div class="container">

        <!-- Copyright statement -->
        <span class="text-muted">&copy; Developed by Jeet Prajapati</span>
      </div>
    </footer>
    <!--**************** End Footer ****************-->

  `,
  styles: [`
  footer {
    background-color: #1C2833;
    font-size: 20px;
    padding-left: 250px;
  }
  `
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
