import {Component} from '@angular/core';
import {UserService} from "../../services/user.service";
import {HubService} from "../hub/hub.service";
import {UserSettingsService} from "../../services/usersettings.service";
import {FabContainer} from "ionic-angular";
import {Icon} from "ionic-angular";

@Component({
  selector: 'page-home',
  templateUrl: 'hub.html',
  providers: [UserService, HubService, UserSettingsService]
})

export class HubPage {
  userData: Object = null;
  news: Object = null;
  filtered: Array<Object> = [];
  filterType: Number = 0;
  selectedFilterIcon:string = "funnel";
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
      this.filterItems();
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

  filterItems = function () {
    if (this.filterType === 0) {
      this.filtered = this.news.articles;
      return;
    }

    this.filtered = [];
    for (let i = 0; i < this.news.articles.length; i++) {
      if (this.news.articles[i].type === this.filterType) {
        this.filtered.push(this.news.articles[i]);
      }
    }
  };

  setFilter = function (type, fab: FabContainer, icon) {
    this.selectedFilterIcon = icon === undefined ? "funnel" : icon;
    this.filterType = type;
    this.filterItems();
    if (fab) {
      fab.close();
    }
  };
}
