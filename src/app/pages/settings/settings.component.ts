import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ToastController} from 'ionic-angular';

import { TranslateService } from 'ng2-translate';

/*
 Generated class for the Settings page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  settings: { vibration: boolean, sound:boolean, language:string } = {
    vibration: false,
    sound: false,
    language: 'de'
  };

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, private translate: TranslateService) {
    this.settings.language = this.translate.currentLang;
  }

  ionViewDidLoad() {
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Settings Saved!',
      duration: 2000,
      position: 'bottom',
      cssClass: 'toast-success'
    });
    toast.present();
  }

  updateSound(settings) {
    this.presentToast();
  }

  updateVibration(settings) {
    this.presentToast();
  }

  setLanguage() {
    this.translate.use(this.settings.language);
  }

}
