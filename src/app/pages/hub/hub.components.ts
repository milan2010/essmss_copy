import {Component} from '@angular/core';
import {UserService} from "../../services/user.service";
import {HubService} from "../hub/hub.service";
import {FabContainer} from "ionic-angular";

@Component({
  selector: 'page-home',
  templateUrl: 'hub.html',
  providers: [UserService, HubService]
})

export class HubPage {
  userData: Object = null;
  news: Object = null;
  filtered: Array<Object> = [];
  filterType: Number = 0;

  constructor(private userService: UserService, private hubService: HubService) {
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

  setFilter = function (type, fab: FabContainer) {
    this.filterType = type;
    this.filterItems();
    if (fab) {
      fab.close();
    }
  };
}
