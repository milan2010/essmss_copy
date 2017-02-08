import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserService } from "../../services/user.service";
import { SettingsService } from './settings.service';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
  providers: [UserService]
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
  * The language used for i18n.
  */
  selectedLanguage:string;

  /**
  * All languages available for the app.
  */
  availableLanguages: { className:string, prettyName:string }[];

  /**
  * The channels used on the information page.
  */
  feedChannels: {channelName:string, filterId:number, icon:string, shown:boolean}[];


  /**
  * Constructor for SettingsPage.
  *
  * @param navCtrl The NavController used for navigation.
  * @param userService UserService stores user-related properties.
  * @param SettingsService SettingsService stores the settings.
  */
  constructor(private navCtrl: NavController, private userService: UserService, private settingsService: SettingsService) {
    this.settingsService.getLanguage().subscribe(val => this.selectedLanguage = val);
    this.availableLanguages = this.settingsService.availableLanguages;

    this.settingsService.getTheme().subscribe(val => this.selectedTheme = val);
    this.availableThemes = this.settingsService.availableThemes;

    this.feedChannels = this.settingsService.getFeedChannels();
  }

  /**
  * Logs out the user
  */
  logOut(){
    this.userService.logOut();
    window.location.reload();
  }

  /**
  * Sets the i18n language.
  */
  setLanguage(language) {
    this.settingsService.setLanguage(language);
  }

  /**
  * Toggles the visibilty of a channel.
  */
  toggle(channel){
    channel.shown = !channel.shown;
    this.settingsService.setFeedChannels(this.feedChannels);
  }

  /**
  * Sets the theme.
  */
  setTheme(theme) {
    this.settingsService.setTheme(theme);
  }
}
