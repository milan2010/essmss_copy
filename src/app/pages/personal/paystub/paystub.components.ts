import { PaystubService } from '../../../services/paystub.service'

import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  selector: 'page-paystub',
  templateUrl: 'paystub.html',
  providers: [PaystubService]
})
export class PaystubPage {
  payStubData = null;
  constructor(public navCtrl: NavController, private paystubService: PaystubService) {
  }



  ionViewDidLoad() {
    console.log('Hello PaystubPage Page');

    this.paystubService.retrieveData();

  }

}
