import {Injectable} from "@angular/core";

@Injectable()
export class UserService {
  user = JSON.parse(localStorage.getItem("user"));

  constructor() {
  }

  setUser(userData) {
    this.user = userData;
    localStorage.setItem('user', JSON.stringify(this.user));
  }

  logOut() {
    this.user = null;
    localStorage.removeItem('user');
  }

  isLoggedIn(): boolean {
    return !!this.user;
  }

  getData() {
    return this.user;
  }
}
