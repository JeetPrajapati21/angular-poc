import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { LoaderService } from 'src/app/users/loader/loader.service';

@Component({
  selector: 'app-user-single',
  template: `
  
    <!-- <div *ngIf="loaderService.isLoading | async" class="loader">
      <mat-progress-bar mode="indeterminate"></mat-progress-bar>
    </div> -->
    
    <div class="container">
      <div class="card border-secondary mx-auto" style="width: 18rem;">
        <img class="card-img-top" [src]="user.avatar_url" alt="User Avatar">
        <div class="card-body text-secondary">
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><h5 class="card-title">Username: {{user.login}}</h5></li>
            <li class="list-group-item"><p class="card-text">Name: {{user.name}}</p></li>
            <li class="list-group-item"><p class="card-text">Followers: {{user.followers}}</p></li>
            <li class="list-group-item"><p class="card-text">Following: {{user.following}}</p></li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .loader {
      position: fixed;
      width: 100%;
      z-index: 99;
    }
  `]
})
export class UserSingleComponent implements OnInit {
  user;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    public loaderService: LoaderService
    ) { }

  

  ngOnInit(): void {

    setTimeout(() => {
      this.loaderService.isLoading.next(false);
    }, 2000);
    /**
     * Username out of the url
     */
    this.route.params.subscribe(params => {
      const username = params["username"];

      /**
       * use the userService to get the data from github api
       */

      this.userService.getUser(username)
        .subscribe(user => {
          this.user = user;
        });
    });
  }

}
