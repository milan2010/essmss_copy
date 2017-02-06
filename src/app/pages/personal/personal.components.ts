import {Component} from '@angular/core';

import {PaystubPage} from "./paystub/paystub.components";
import {PersonaldataPage} from "./personaldata/personaldata.components";
import {ContactpersonPage} from "./contactperson/contactperson.components";
import {AbsencePage} from "./absence/absence.components";
import {WorkingtimePage} from "./workingtime/workingtime.components";
import {UserService} from "../../services/user.service";
import {NavController} from "ionic-angular";
import {SettingsPage} from "../settings/settings.component";

@Component({
  selector: 'page-personal',
  templateUrl: 'personal.html',
  providers: [UserService]
})
export class PersonalPage {
  test: string;
  options: any;
  userData: Object = null;
  menuItems: Array<{title: string, subtitle:string, icon:string, subicon:string, link:Object }> = [
    {
      title: "PERSONAL.MENU.WORKTIME.TITLE",
      subtitle: "PERSONAL.MENU.WORKTIME.SUBTITLE",
      icon: "time",
      subicon: "",
      link: WorkingtimePage
    },
    {
      title: 'PERSONAL.MENU.ABSENCE.TITLE',
      subtitle: 'PERSONAL.MENU.ABSENCE.SUBTITLE',
      icon: 'plane',
      subicon: "",
      link: AbsencePage
    },
    {
      title: 'PERSONAL.MENU.PAYSTUB.TITLE',
      subtitle: 'PERSONAL.MENU.PAYSTUB.SUBTITLE',
      icon: 'document',
      subicon: "",
      link: PaystubPage
    },
    {
      title: 'PERSONAL.MENU.PERSONALDATA.TITLE',
      subtitle: 'PERSONAL.MENU.PERSONALDATA.SUBTITLE',
      icon: 'contact',
      subicon: "",
      link: PersonaldataPage
    },
    {
      title: 'PERSONAL.MENU.CONTACTPERSON.TITLE',
      subtitle: 'PERSONAL.MENU.CONTACTPERSON.SUBTITLE',
      icon: 'contacts',
      subicon: "",
      link: ContactpersonPage
    }
  ];

  constructor(private userService: UserService, public navCtrl: NavController) {
    this.userData = this.userService.getData();

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

  goToSettings = function () {
    this.navCtrl.push(SettingsPage);
  }
}
