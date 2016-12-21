import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  selector: 'page-paystub',
  templateUrl: 'paystub.html'
})
export class PaystubPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('Hello PaystubPage Page');
  }

}
