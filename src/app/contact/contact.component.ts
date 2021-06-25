import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <!--**************** Form Component ****************-->

    <!--**************** Title Section ****************-->
    <div class="text-secondary px-4 py-5 text-center">
      <div>
        <h1 class="display-5 fw-bold">Form Component</h1>
      </div>
    </div>
    <!--**************** End Title Section ****************-->


    <!--**************** Form Section ****************-->
    <div class="row">
      <div class="col-md-6 text-left rounded shadow py-3">
        <form (ngSubmit)="submitForm()" #contactForm="ngForm" >

          <!--**************** User Name Field ****************-->
          <div class="form-group">
            <label for="exampleInputName">Github Username:</label>
            <input type="text" class="form-control" id="exampleInputName" aria-describedby="nameHelp" name="name" [(ngModel)]="name" #nameInput="ngModel" required text />

            <!-- If Name is empty then show this line -->
            <div id="nameHelp" class="form-text" *ngIf="nameInput.invalid && nameInput.touched">Github Username is required</div>
          </div>
          <!--**************** End User Name Field ****************-->

          <!--**************** Email Field ****************-->
          <div class="form-group">
            <label for="exampleInputEmail1">Email:</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" [(ngModel)]="email" #emailInput="ngModel" required email />

            <!-- If Email is empty then show this line -->
            <div id="emailHelp" class="form-text" *ngIf="emailInput.invalid && emailInput.touched">Email is required and has to be an email</div>
          </div>
          <!--**************** End Email Field ****************-->

          <!--**************** Message Field ****************-->
          <div class="form-group">
            <label for="exampleInputMessage">Your Message:</label>
            <textarea type="text" rows="3" class="form-control" id="exampleInputMessage" name="message" [(ngModel)]="message" text ></textarea>
          </div> 
          <!--****************End Message Field ****************-->         

          <!--**************** Button ****************-->
          <!-- Button to trigger Bootstrap Modal -->
          <button type="submit" class="btn btn-primary mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal" [disabled]="contactForm.invalid">
            Submit
          </button>
          <!--**************** End Button ****************-->

          <!--**************** Bootstrap Modal ****************-->
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div class="modal-content">

                <!-- Modal Heading Section -->
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Github Username: {{name}}</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <!-- Modal Body Section -->
                <div class="modal-body">
                  Email: {{email}}
                </div>
                <hr>
                <div class="modal-body">
                  Message: {{message}}
                </div>

                <!-- Close Button -->
                <div class="modal-footer">
                  <button type="button" class="btn btn-primary" routerLink="/users/{{name}}" data-bs-dismiss="modal">Github-Profile</button>
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
          <!--**************** End Bootstrap Modal ****************-->
        </form>
      </div>
    </div>
    <!--**************** End Form Section ****************-->
  `,
  styles: [`
    label {
      margin: 5px;
    }
    .row {
      width: 80%;
      margin-left: 270px;
    }
    .text-center {
      margin-right: 440px;
    }
  `]
})
export class ContactComponent implements OnInit {
  name: string = "";
  email: string = "";
  message: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {
    // const message = `My name is ${this.name}`;
    // alert(message);
  }

}
