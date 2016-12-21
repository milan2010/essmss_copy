import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  selector: 'page-absence',
  templateUrl: 'absence.html'
})
export class AbsencePage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('Hello AbsencePage Page');
  }

}
