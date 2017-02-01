import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ToastController} from 'ionic-angular';

import { TranslateService } from 'ng2-translate';
import {UserService} from "../../services/user.service";
import {UserSettingsService} from "../../services/usersettings.service";


@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
  providers: [UserService, UserSettingsService]
})
export class SettingsPage {
  userData: Object = null;
  language:string = "de";
  settings: { feed:{ calendar:boolean, news:boolean, expense:boolean, message:boolean } } = {
    feed:{
      calendar: true,
      news: false,
      expense: false,
      message: true
    }
  };

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, private translate: TranslateService, private userService: UserService, private userSettingsService: UserSettingsService) {
    this.userData = this.userService.getData();

    this.userSettingsService.getData()
    .then(data => {
      this.settings = data;
    })
    .catch(error => {
      console.log(error);
    });

    this.language = this.translate.currentLang;
  }

  logOut(){
    this.userService.logOut();
    window.location.reload();
  }

  ionViewWillLeave() {
    this.setUserSettings();
  }

  setUserSettings(){
    this.userSettingsService.setData(this.settings);
  }

  setLanguage() {
    this.translate.use(this.language);
  }

  toggleCalendar() {
    this.settings.feed.calendar = !this.settings.feed.calendar;
  }

  toggleNews() {
    this.settings.feed.news = !this.settings.feed.news;
  }

  toggleExpense() {
    this.settings.feed.expense = !this.settings.feed.expense;
  }

  toggleMessage() {
    this.settings.feed.message = !this.settings.feed.message;
  }

}
