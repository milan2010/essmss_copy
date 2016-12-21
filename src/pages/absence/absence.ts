import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Absence page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-absence',
  templateUrl: 'absence.html'
})
export class AbsencePage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello AbsencePage Page');
  }

}
