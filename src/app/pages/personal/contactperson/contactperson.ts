import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Contactperson page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-contactperson',
  templateUrl: 'contactperson.html'
})
export class ContactpersonPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ContactpersonPage Page');
  }

}
