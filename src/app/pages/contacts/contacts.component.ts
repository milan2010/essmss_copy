import {Component} from '@angular/core';

import { ViewController } from 'ionic-angular';

@Component({
  selector: 'contacts-Page',
  templateUrl: 'contacts.html'
})

export class ContactsPage {

  constructor(private viewCtrl: ViewController) {
  }
  closeModal() {
  this.viewCtrl.dismiss();
  }
  ionViewDidLoad() {}
}