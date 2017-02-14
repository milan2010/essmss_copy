import {Injectable} from "@angular/core";
import { Storage } from '@ionic/storage';

@Injectable()
export class UserService {
  user:any = this.storage.get("user").then(data => this.user = JSON.parse(data));

  constructor(private storage: Storage) {
  }

  setUser(userData) {
    this.user = userData;
    this.storage.set("user", JSON.stringify(this.user));
  }

  logOut() {
    this.user = null;
    this.storage.remove("user");
    this.storage.remove("usersettings");
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
