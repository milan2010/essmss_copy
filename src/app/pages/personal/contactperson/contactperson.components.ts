import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  selector: 'page-contactperson',
  templateUrl: 'contactperson.html'
})
export class ContactpersonPage {
  contacts: Array<Object> = [];

  constructor(public navCtrl: NavController) {
    this.contacts = [
      {
        "name" : "Olaf Muller",
        "role" : "Meister",
        "email" : "omuller@email.com",
        "phone" : "1234567890"
      },
      {
        "name" : "Josef Hermann",
        "role" : "Teamsprecher",
        "email" : "jhermann@email.com",
        "phone" : "1234567890"
      },
      {
        "name" : "Wilhelm Ackert",
        "role" : "Monteur Maschine 1",
        "email" : "olaf@email.com",
        "phone" : "1234567890"
      },
      {
        "name" : "Sebastian Saal",
        "role" : "Monteur Maschine 2",
        "email" : "ssaal@email.com",
        "phone" : "1234567890"
      },
      {
        "name" : "Christian Harnisch",
        "role" : "Monteur Maschine 3",
        "email" : "ssaal@email.com",
        "phone" : "1234567890"
      },
      {
        "name" : "John Albrecht",
        "role" : "Monteur Maschine 4",
        "email" : "ssaal@email.com",
        "phone" : "1234567890"
      }
    ]


  }

}
