import {Component} from '@angular/core';
import {UserService} from "../../services/user.service";
import {HubService} from "../hub/hub.service";
import {FabContainer} from "ionic-angular";
import {SettingsService} from '../settings/settings.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'page-home',
  templateUrl: 'hub.html',
  providers: [HubService]
})

export class HubPage {
  userData: Object = null;
  news:{status:string, source:string, sortBy:string, articles:{uuid:string, author:string, title:string, description:string, url:string, urlToImage:string, publishedAt, liked:boolean, type:number}[]} = null;
  filtered: Array<Object> = [];
  filterType: Number = 0;
  selectedFilterIcon: string = "funnel";
  feedChannels: {channelName: string, filterId: number, icon: string, shown: boolean}[];

  likedArticles:Array<string>;

  constructor(private storageService: StorageService, private userService: UserService, private hubService: HubService, private settingsService: SettingsService) {
    this.feedChannels = this.settingsService.getFeedChannels();
  }

  ionViewDidLoad() {
    this.userData = this.userService.getData();
    this.doRefresh(false);
  }

  doRefresh = function(refresher) {
    this.hubService.getNews()
    .then(data => {
      this.news = data;
      this.getLikes();
      this.filterItems();
      if (refresher) {
        refresher.complete();
      }
    })
    .catch(error => {
      console.log(error);
    });
  };

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

  getLikes(){
    this.likedArticles = this.storageService.getLikedArticles();
    for(let article of this.news.articles){
      article.liked = this.likedArticles.includes(article.uuid) ? true : false;
    }
  }
}
