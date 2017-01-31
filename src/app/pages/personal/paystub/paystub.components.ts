import {PaystubService} from './paystub.service'

import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  selector: 'page-paystub',
  templateUrl: 'paystub.html',
  providers: [PaystubService],
})
export class PaystubPage {
  payStubData = null;

  constructor(public navCtrl: NavController, private paystubService: PaystubService) {

    paystubService.getData()
      .then(data => {
        // this.payStubData = data;

        this.payStubData = [
          {
            'id' : 1,
            'name' : '2016',
            'fromTo' : '01. Jan - 31. Dez',
            'subItems' : [
              {
                'id' : 3,
                'name' : 'Dezember',
                'fromTo' : '01. - 31. Dez 2016',
                'expense' : {
                  'name' : 'Gehalt gesamt (netto)',
                  'total' : 2056,
                  'totalSubcharge': 210,
                  'withdrawalOvertime' : 45,
                  'inflowOvertime': 30,
                  'apreciation' : -6,
                  'currency' : 'USD'
                }
              },
              {
                'id' : 4,
                'name' : 'November',
                'fromTo' : '01. - 31. Nov 2016',
                'expense' : {
                  'name' : 'Gehalt gesamt (netto)',
                  'total' : 2056,
                  'totalSubcharge': 210,
                  'withdrawalOvertime' : 45,
                  'inflowOvertime': 30,
                  'apreciation' : -6,
                  'currency' : 'USD'
                }
              }
            ]
          },
          {
            'id' : 2,
            'name' : '2015',
            'fromTo' : '01. Jan - 31. Dez',
            'subItems' : [
              {
                'id' : 5,
                'name' : 'Dezember',
                'fromTo' : '01. - 31. Dez 2015',
                'expense' : {
                  'name' : 'Gehalt gesamt (netto)',
                  'total' : 2056,
                  'totalSubcharge': 210,
                  'withdrawalOvertime' : 45,
                  'inflowOvertime': 30,
                  'apreciation' : -6,
                  'currency' : 'USD'
                }
              }
            ]
          }
        ];
        console.log(this.payStubData);
      })
      .catch(error => {
        console.log(error);
      })
  }


}
