import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  selector: 'page-contactperson',
  templateUrl: 'contactperson.html'
})
export class ContactpersonPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('Hello ContactpersonPage Page');
  }

}
