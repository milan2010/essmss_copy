import {Component} from '@angular/core';
import {UserService} from "../../services/user.service";
import {HubService} from "../hub/hub.service";

@Component({
  selector: 'page-home',
  templateUrl: 'hub.html',
  providers: [UserService, HubService]
})

export class HubPage {
  userData: Object = null;
  news: Object = null;

  constructor(private userService: UserService, private hubService: HubService) {
  }

  ionViewDidLoad() {
    this.userData = this.userService.getData();

    this.hubService.getNews()
      .then(data => {
        this.news = data;
      })
      .catch(error => {
        console.log(error);
      });
  }
}
