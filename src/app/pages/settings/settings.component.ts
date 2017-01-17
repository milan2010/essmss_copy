import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ToastController} from 'ionic-angular';

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
  settings = {
    vibration: false,
    sound: false
  };

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('Hello SettingsPage Page');
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
    this.presentToast()
  }

  updateVibration(settings) {
    this.presentToast()
  }

}
