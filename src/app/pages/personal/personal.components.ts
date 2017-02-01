import {Component} from '@angular/core';

import {PaystubPage} from "./paystub/paystub.components";
import {PersonaldataPage} from "./personaldata/personaldata.components";
import {ContactpersonPage} from "./contactperson/contactperson.components";
import {AbsencePage} from "./absence/absence.components";
import {WorkingtimePage} from "./workingtime/workingtime.components";
import {UserService} from "../../services/user.service";
import {LoginPage} from "../login/login.component";
import {NavController, App} from "ionic-angular";
import {SettingsPage} from "../settings/settings.component";

@Component({
  selector: 'page-personal',
  templateUrl: 'personal.html',
  providers: [UserService]
})
export class PersonalPage {
  test: string;
  personalMenu: any[];
  options: any;
  userData: Object = null;

  constructor(private userService: UserService, public navCtrl: NavController, private app: App) {
    this.userData = this.userService.getData();

    this.personalMenu = [
      {
        icon: 'md-time',
        title: 'PERSONAL.MENU.WORKTIME.TITLE',
        subtitle: 'PERSONAL.MENU.WORKTIME.SUBTITLE',
        link: WorkingtimePage
      },
      {
        icon: 'md-plane',
        title: 'PERSONAL.MENU.HOLIDAY.TITLE',
        subtitle: 'PERSONAL.MENU.HOLIDAY.SUBTITLE',
        link: AbsencePage
      },
      {
        icon: 'md-document',
        title: 'PERSONAL.MENU.PAYMENT.TITLE',
        subtitle: 'PERSONAL.MENU.PAYMENT.SUBTITLE',
        link: PaystubPage
      },
      {
        icon: 'ios-contact',
        title: 'PERSONAL.MENU.DATA.TITLE',
        subtitle: 'PERSONAL.MENU.DATA.SUBTITLE',
        link: PersonaldataPage
      },
      {
        icon: 'ios-contacts',
        title: 'PERSONAL.MENU.CONTACT.TITLE',
        subtitle: 'PERSONAL.MENU.CONTACT.SUBTITLE',
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

  logOut = function () {
    this.userService.logOut();
    this.app.getRootNav().setRoot(LoginPage);
//    window.location.reload();
  };

  goToSettings = function () {
    this.navCtrl.push(SettingsPage);
  }
}
