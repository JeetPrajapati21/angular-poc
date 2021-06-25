import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user-list',
  template: `

    <!--**************** User Section ****************-->
    <div class="container mt-5">

      <!-- Display github username of all users -->
      <div class="row" *ngIf="users">
        <div class="col-3 mt-3" *ngFor="let user of users | async">
          <div class="card">
            <div class="card-body">

              <!-- Github username -->
              <h4 class="card-title text-center">
                <a routerLink="/users/{{user.login}}" class="text-decoration-none text-secondary">{{user.login}}</a>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--**************** End User Section ****************-->
  `,
  styles: [`
    .container {
      padding-left: 160px;
      padding-right: 160px;
    }
  `]
})
export class UserListComponent implements OnInit {
  users;

  constructor(
    private userService: UserService
    ) { }

  ngOnInit() {
    // Get all users
    this.users = this.userService.getUsers();
  }

}

