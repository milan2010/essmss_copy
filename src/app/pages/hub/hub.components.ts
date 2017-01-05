import {Component} from '@angular/core';
import {UserService} from "../../services/user.service";
import {HubService} from "../hub/hub.service";


@Component({
  selector: 'page-home',
  templateUrl: 'hub.html',
  providers: [HubService]
})

export class HubPage {
  userData: null;
  news: Object = null;

  constructor(private userService: UserService, private hubService: HubService) {
    this.userData = userService.getData();

    hubService.getNews()
      .then(data => {
        console.log(data);
        this.news = data;
      })
      .catch(error => {
        console.log(error);
      })
  }
}
