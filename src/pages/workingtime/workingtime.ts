import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Workingtime page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-workingtime',
  templateUrl: 'workingtime.html'
})
export class WorkingtimePage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello WorkingtimePage Page');
  }

}
