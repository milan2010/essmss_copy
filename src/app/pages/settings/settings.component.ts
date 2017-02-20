import { Component } from '@angular/core';
import { Http } from "@angular/http";
import { NavController, ToastController, Platform } from 'ionic-angular';
import { InAppBrowser, Geolocation } from 'ionic-native';
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

  location: {longitude:number, latitude:number, name:string} = { longitude: 0, latitude: 0, name: "" };

  // appVersion:string = "0";

  /**
  * Constructor for SettingsPage.
  *
  * @param navCtrl The NavController used for navigation.
  * @param u  serService UserService stores user-related properties.
  * @param settingsService SettingsService stores the settings.
  * @param authorizationService AuthorizationService stores the authorizations.
  */
  constructor(private navCtrl: NavController,private http: Http, private platform: Platform, private toastCtrl: ToastController, private storageService: StorageService, private userService: UserService, private settingsService: SettingsService, private authorizationService: AuthorizationService) {
    this.settingsService.getLanguage().subscribe(val => this.selectedLanguage = val);
    this.availableLanguages = this.settingsService.availableLanguages;

    this.settingsService.getTheme().subscribe(val => this.selectedTheme = val);
    this.availableThemes = this.settingsService.availableThemes;

    this.feedChannels = this.settingsService.getFeedChannels();

    this.initializeLocation();
  }

  initializeLocation() {
    Geolocation.getCurrentPosition().then((resp) => {
      this.location.longitude = resp.coords.longitude;
      this.location.latitude = resp.coords.latitude;

      this.http.get("http://api.openweathermap.org/data/2.5/weather?lat=" + this.location.latitude + "&lon=" + this.location.longitude + "&appid=a43f713ecdb556d0eb126d2a5acb75f9")
      .map(res => res.json())
      .subscribe(data => {
        this.location.name = data.name;
      });
    }).catch((error) => {
    });
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
    this.userService.logOut().then(data => {
      //this.platform.exitApp();
      window.location.reload();
    });
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
