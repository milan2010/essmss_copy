import {Injectable} from "@angular/core";
import { StorageService } from './storage.service';

@Injectable()
export class UserService {
  user:any = this.storageService.get("user").then(data => this.user = JSON.parse(data));

  constructor(private storageService: StorageService) {
  }

  setUser(userData) {
    this.user = userData;
    this.storageService.set(StorageService.USER, JSON.stringify(this.user));
  }

  logOut() {
    let promises = [this.storageService.remove(StorageService.USER), this.storageService.remove(StorageService.USERSETTINGS)];
    this.user = null;
    return Promise.all(promises);
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
