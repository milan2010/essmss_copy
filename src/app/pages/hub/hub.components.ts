import {Component} from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'page-home',
  templateUrl: 'hub.html'
})
export class HubPage {
  userData: null;

  constructor(private userService: UserService) {
    this.userData = userService.getData();
  }
}
