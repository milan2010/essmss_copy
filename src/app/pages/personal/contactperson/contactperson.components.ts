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
        "name" : "Herbert Meiser",
        "role" : "Meister",
        "email" : "herbert.meister@email.com",
        "phone" : "1234567890",
        "image" : "assets/img/HerbertMeiser.jpg"
      },
      {
        "name" : "Peter Berner",
        "role" : "Teamsprecher",
        "email" : "peter.berner@email.com",
        "image" : "assets/img/PeterBerner.png"
      },
      {
        "name" : "Claudia Kleber",
        "role" : "Personalreferentin",
        "email" : "ClaudiaKleber@email.com",
        "phone" : "1234567890",
        "image" : "assets/img/ClaudiaKleber.jpg"
      },
      {
        "name" : "Markus Maier",
        "role" : "Unterabteilungsleiter",
        "email" : "MarkusMeier@email.com",
        "phone" : "1234567890",
        "image" : "assets/img/MarkusMeier.jpg"
      },
      {
        "name" : "Sylvia Gerber",
        "role" : "Vertrauensfrau",
        "email" : "SylviaGerber@email.com",
        "phone" : "1234567890",
        "image" : "assets/img/SylviaGerber.jpg"
      }
    ]
  }
}