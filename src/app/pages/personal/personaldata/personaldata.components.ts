import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  selector: 'page-personaldata',
  templateUrl: 'personaldata.html'
})
export class PersonaldataPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('Hello PersonaldataPage Page');
  }

}
