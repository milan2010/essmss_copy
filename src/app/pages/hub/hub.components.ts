import {Component} from '@angular/core';
import {UserService} from "../../services/user.service";
import {HubService} from "../hub/hub.service";
import {FabContainer} from "ionic-angular";
import { SettingsService } from '../settings/settings.service';

@Component({
  selector: 'page-home',
  templateUrl: 'hub.html',
  providers: [HubService]
})

export class HubPage {
  userData: Object = null;
  news: Object = null;
  filtered: Array<Object> = [];
  filterType: Number = 0;
  selectedFilterIcon:string = "funnel";
  feedChannels: {channelName:string, filterId:number, icon:string, shown:boolean}[];

  constructor(private userService: UserService, private hubService: HubService, private settingsService: SettingsService) {
    this.feedChannels = this.settingsService.getFeedChannels();
  }

  ionViewDidLoad() {

    this.hubService.getNews()
    .then(data => {
      this.news = data;
      this.filterItems();
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

  setFilter = function (filterId, icon, fab: FabContainer) {
    this.selectedFilterIcon = icon === undefined ? "funnel" : icon;
    this.filterType = filterId;
    this.filterItems();
    if (fab) {
      fab.close();
    }
  };
}
