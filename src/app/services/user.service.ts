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
    localStorage.removeItem('usersettings');
  }

  isLoggedIn(): boolean {
    return !!this.user;
  }

  isManager():boolean {
    return this.user.Employeenumber === '00016217';
  }

  isEmployee():boolean {
    return this.user.Employeenumber === '00016218';
  }

  getData() {
    return this.user;
  }
}
