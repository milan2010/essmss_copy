import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from 'ng2-translate';
import { UserService } from "../../services/user.service";
import { UserSettingsService } from "../../services/usersettings.service";
import { SettingsService } from './settings.service';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
  providers: [UserService, UserSettingsService]
})
/**
* Class for the SettingsPage.
*/
export class SettingsPage {

  /**
  * The current theme.
  */
  selectedTheme: string;

  /**
  * All themes available for the app.
  */
  availableThemes: { className: string, prettyName: string }[];

  /**
  * The object storing user-data.
  */
  userData: Object = null;

  /**
  * The language used for i18n.
  */
  language:string = "de";

  /**
  * Settings storing feed-data.
  */
  settings: { feed:{ calendar:boolean, news:boolean, expense:boolean, message:boolean } } = {
    feed:{
      calendar: true,
      news: true,
      expense: true,
      message: true
    }
  };

  /**
  * Constructor for SettingsPage.
  *
  * @param navCtrl The NavController used for navigation.
  * @param translate The ng2-translate TranslationService.
  * @param userService UserService stores user-related properties.
  * @param userSettingsService UserSettingsService stores the settings of the user.
  */
  constructor(private navCtrl: NavController, private translate: TranslateService, private userService: UserService, private userSettingsService: UserSettingsService, private settingsService: SettingsService) {
    this.userData = this.userService.getData();

    this.userSettingsService.getData()
    .then(data => {
      this.settings = data;
    })
    .catch(error => {
      console.log(error);
    });

    this.language = this.translate.currentLang;

    this.settingsService.getTheme().subscribe(val => this.selectedTheme = val);
    this.availableThemes = this.settingsService.availableThemes;
  }

  /**
  * Logs out the user
  */
  logOut(){
    this.userService.logOut();
    window.location.reload();
  }

  /**
  * Sets the user-settings after leaving the page.
  */
  ionViewWillLeave() {
    this.setUserSettings();
  }

  /**
  * Sets the user settings.
  */
  setUserSettings(){
    this.userSettingsService.setData(this.settings);
  }

  /**
  * Sets the i18n language.
  */
  setLanguage() {
    this.translate.use(this.language);
  }

  /**
  * Shows or hides the feed-calendar.
  */
  toggleCalendar() {
    this.settings.feed.calendar = !this.settings.feed.calendar;
  }

  /**
  * Shows or hides the feed-news.
  */
  toggleNews() {
    this.settings.feed.news = !this.settings.feed.news;
  }

  /**
  * Shows or hides the feed-expense.
  */
  toggleExpense() {
    this.settings.feed.expense = !this.settings.feed.expense;
  }

  /**
  * Shows or hides the feed-message.
  */
  toggleMessage() {
    this.settings.feed.message = !this.settings.feed.message;
  }

  setTheme(e) {
    this.settingsService.setTheme(e);
  }
}
