import {Injectable} from "@angular/core";

@Injectable()
export class UserService {
  user = JSON.parse(localStorage.getItem("user"));

  constructor() {
  }

  setUser(userData) {
    console.log(userData);
    this.user = userData;
    localStorage.setItem('user', JSON.stringify(this.user));
  }

  isLoggedIn(): boolean {
    return !!this.user;
  }

  getData() {
    return this.user;
  }
}
