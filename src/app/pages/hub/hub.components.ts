import {Component} from '@angular/core';
import {UserService} from "../../services/user.service";
import {HubService} from "../hub/hub.service";
import {FabContainer} from "ionic-angular";
import {SettingsService} from '../settings/settings.service';
import {StorageService} from '../../services/storage.service';

@Component({
  selector: 'page-home',
  templateUrl: 'hub.html',
  providers: [HubService]
})

export class HubPage {
  userData: Object = null;
  news:{uuid:string, author:string, title:string, description:string, url:string, urlToImage:string, publishedAt:string , liked:boolean, type:number}[] = null;
  filtered: Array<Object> = [];
  filterType: Number = 0;
  selectedFilterIcon: string = "funnel";
  feedChannels: {channelName: string, filterId: number, icon: string, shown: boolean}[];

  likedArticles:Array<string>;

  private startArticles = 0;
  private infinite:any;

  constructor(private storageService: StorageService, private userService: UserService, private hubService: HubService, private settingsService: SettingsService) {
    this.feedChannels = this.settingsService.getFeedChannels();
  }

  ionViewDidLoad() {
    this.userData = this.userService.getData();
    this.doRefresh(false);
  }

  doRefresh = function(refresher) {
    // if refresher is pulled, re-enable infinite scrolling and reset startArticles
    if(refresher && this.infinite){      
      this.infinite.enable(true);
      this.startArticles = 0;
    }

    this.hubService.loadArticles(this.startArticles)
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
      this.filtered = this.news;
      return;
    }

    this.filtered = [];
    for (let i = 0; i < this.news.length; i++) {
      if (this.news[i].type === this.filterType) {
        this.filtered.push(this.news[i]);
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
    for(let article of this.news){
      article.liked = this.likedArticles.includes(article.uuid) ? true : false;
    }
  }

  doInfinite(infiniteScroll:any) {
    this.infinite = infiniteScroll;
    this.startArticles += 3;

    this.hubService.loadArticles(this.startArticles)
    .then(data => {
      let countArticles = this.news.length;

      for (let i = 0; i < data.length; i++) {
        this.news.push(data[i]);
      }

      this.getLikes();
      this.filterItems();

      // disable if end is reached
      if(this.news.length == countArticles){
        infiniteScroll.enable(false);
      }

      infiniteScroll.complete();
    });
  }
}
