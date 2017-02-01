import {Component} from '@angular/core';
import {UserService} from "../../services/user.service";
import {HubService} from "../hub/hub.service";
import {UserSettingsService} from "../../services/usersettings.service";

@Component({
  selector: 'page-home',
  templateUrl: 'hub.html',
  providers: [UserService, HubService, UserSettingsService]
})

export class HubPage {
  userData: Object = null;
  news: Object = null;
  userSettings: { feed:{ calendar:boolean, news:boolean, expense:boolean, message:boolean } } = {
    feed:{
      calendar: true,
      news: false,
      expense: false,
      message: true
    }
  };

  constructor(private userService: UserService, private hubService: HubService, private userSettingsService: UserSettingsService) {

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

  ionViewWillEnter(){
    this.userSettingsService.getData()
    .then(data => {
      this.userSettings = data;
    })
    .catch(error => {
      console.log(error);
    });
  }
}
