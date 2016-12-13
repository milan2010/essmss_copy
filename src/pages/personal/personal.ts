import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Personal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-personal',
  templateUrl: 'personal.html'
})
export class PersonalPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello PersonalPage Page');
  }

}
