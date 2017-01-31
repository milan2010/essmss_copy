import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  selector: 'page-personaldata',
  templateUrl: 'personaldata.html'
})
export class PersonaldataPage {
  edit:boolean = false;

  constructor(public navCtrl: NavController) {
  }

  editPersonalData(){
    this.edit = true;
  }

  savePersonalData() {
    this.edit = false;
  }

}
