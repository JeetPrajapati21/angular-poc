import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // Github API to get users
  apiUrl = "https://api.github.com/users";

  constructor(private http: HttpClient) {}

  // Get all Users
  getUsers() {
    return this.http.get(`${this.apiUrl}?per_page=50`);
  }

  //  Get a single user by username
  getUser(username: string) {
    return this.http.get(`${this.apiUrl}/${username}`);
  }

}
