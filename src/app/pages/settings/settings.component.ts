import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { InAppBrowser } from 'ionic-native';
import { UserService } from "../../services/user.service";
import { SettingsService } from './settings.service';
import { AuthorizationService } from '../../services/authorization.service';
import { AccountPage } from "./account/account.component";
import { TutorialPage } from "../tutorial/tutorial.component";
import { StorageService } from '../../services/storage.service';


@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
  providers: [UserService]
})
/**
* Class for the SettingsPage.
*/
export class SettingsPage {
  selectedSettings: string = "general";

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
  * @param u  serService UserService stores user-related properties.
  * @param settingsService SettingsService stores the settings.
  * @param authorizationService AuthorizationService stores the authorizations.
  */
  constructor(private navCtrl: NavController, private toastCtrl: ToastController, private storageService: StorageService, private userService: UserService, private settingsService: SettingsService, private authorizationService: AuthorizationService) {
    this.settingsService.getLanguage().subscribe(val => this.selectedLanguage = val);
    this.availableLanguages = this.settingsService.availableLanguages;

    this.settingsService.getTheme().subscribe(val => this.selectedTheme = val);
    this.availableThemes = this.settingsService.availableThemes;

    this.feedChannels = this.settingsService.getFeedChannels();
  }

  goToAccount() {
    this.navCtrl.push(AccountPage);
  }

  goToTutorial(){
    this.navCtrl.push(TutorialPage, { reviewd: true });
  }

  /**
  * Logs out the user
  */
  logOut(){
    this.userService.logOut();
    //  this.storage.remove("hasSeenTutorial");
    window.location.reload();
  }

  /**
  * Sets the i18n language.
  */
  setLanguage(language:string) {
    this.settingsService.setLanguage(language);
  }

  /**
  * Toggles the visibilty of a channel.
  */
  toggle(channel:any){
    channel.shown = !channel.shown;
    this.settingsService.setFeedChannels(this.feedChannels);
  }

  /**
  * Sets the theme.
  */
  setTheme(theme:string) {
    this.settingsService.setTheme(theme);
  }

  /**
  * Call authorizationService to update authorizations.
  */
  updateAuthorizations(){
    this.authorizationService.forceUpdate();
    this.showToast("Authorizations got updated...");
  }

  callHotline(e){
    e.stopPropagation();
    new InAppBrowser('tel:0123456789');
  }

  resetTutorial() {
    this.storageService.remove(StorageService.TUTORIAL_SHOWN);
    this.showToast("Tutorial storage was reset...");
  }

  showToast(message){
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }
}
