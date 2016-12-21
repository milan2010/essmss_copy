import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  selector: 'page-workingtime',
  templateUrl: 'workingtime.html'
})
export class WorkingtimePage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('Hello WorkingtimePage Page');
  }

}
