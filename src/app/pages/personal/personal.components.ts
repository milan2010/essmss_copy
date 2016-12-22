import {Component} from '@angular/core';

import {PaystubPage} from "./paystub/paystub.components";
import {PersonaldataPage} from "./personaldata/personaldata.components";
import {ContactpersonPage} from "./contactperson/contactperson.components";
import {AbsencePage} from "./absence/absence.components";
import {WorkingtimePage} from "./workingtime/workingtime.components";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'page-personal',
  templateUrl: 'personal.html'
})
export class PersonalPage {
  test: string;
  personalMenu: any[];
  options: any;
  userData: null;

  constructor(private userService: UserService) {
    this.userData = userService.getData();

    this.personalMenu = [
      {
        icon: 'md-time',
        title: 'Arbeitszeit',
        subtitle: 'Aktueller Stand',
        link: WorkingtimePage
      },
      {
        icon: 'md-plane',
        title: 'Urlaub & Abwesenheit',
        subtitle: 'Aktueller Stand',
        link: AbsencePage
      },
      {
        icon: 'md-document',
        title: 'Entgeldnachweis',
        subtitle: 'Aktueller Stand',
        link: PaystubPage
      },
      {
        icon: 'ios-contact',
        title: 'Stammdaten',
        subtitle: 'Aktueller Stand',
        link: PersonaldataPage
      },
      {
        icon: 'ios-contacts',
        title: 'Ansprechpartner',
        subtitle: 'Aktueller Stand',
        link: ContactpersonPage
      }];

    this.options = {
      background: {
        url: "assets/img/header1.jpeg",
        classes: "your-custom-optional-background-class",
        blur: {
          value: '0',
          colors: {
            start: 'rgba(0, 0, 0, 0.4)',
            mid: 'rgba(35, 162, 212, 0.8)',
            end: 'rgba(35, 162, 212, 0.6)'
          }
        }
      },
      img: {
        url: "assets/img/bernd.png",
        classes: "your-custom-optional-img-class"
      },
      name: {
        text: "Bernd Müller",
        classes: 'your-custom-optional-name-class'
      },
      subtext: {
        text: "PWF1-KK/DAA",
        classes: 'your-custom-optional-subtext-class'
      }
    };

  }

  ionViewDidLoad() {
    console.log('Hello PersonalPage Page');
  }

}
