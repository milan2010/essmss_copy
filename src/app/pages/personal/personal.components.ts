import {Component} from '@angular/core';

import {PaystubPage} from "./paystub/paystub.components";
import {PersonaldataPage} from "./personaldata/personaldata.components";
import {ContactpersonPage} from "./contactperson/contactperson.components";
import {AbsencePage} from "./absence/absence.components";
import {WorkingtimePage} from "./workingtime/workingtime.components";
import {UserService} from "../../services/user.service";
import {NavController} from "ionic-angular";
import {SettingsPage} from "../settings/settings.component";
import {PersonService} from "../../services/person.service";
import {AuthorizationService} from '../../services/authorization.service';

@Component({
  selector: 'page-personal',
  templateUrl: 'personal.html'
})
export class PersonalPage {
  test: string;
  options: any;
  userData: Object = null;
  team = null;
  menuItems: Array<{id: string, title: string, subtitle:string, icon:string, subicon:string, link:Object, params:Object}> = [];

  constructor(private userService: UserService, public navCtrl: NavController, private personService: PersonService, private authorizationService: AuthorizationService) {
    this.userData = this.userService.getData();

    personService.getContacts()
    .then(data => {
      this.team = data;

      this.menuItems = [{
          id: "app-worktime",
          title: "PERSONAL.MENU.WORKTIME.TITLE",
          subtitle: "PERSONAL.MENU.WORKTIME.SUBTITLE",
          icon: "time",
          subicon: "",
          link: WorkingtimePage,
          params: ""
        },
        {
          id: "app-absence",
          title: 'PERSONAL.MENU.ABSENCE.TITLE',
          subtitle: 'PERSONAL.MENU.ABSENCE.SUBTITLE',
          icon: 'plane',
          subicon: "",
          link: AbsencePage,
          params: ""
        },
        {
          id: "app-paystub",
          title: 'PERSONAL.MENU.PAYSTUB.TITLE',
          subtitle: 'PERSONAL.MENU.PAYSTUB.SUBTITLE',
          icon: 'document',
          subicon: "",
          link: PaystubPage,
          params: ""
        },
        {
          id: "app-personaldata",
          title: 'PERSONAL.MENU.PERSONALDATA.TITLE',
          subtitle: 'PERSONAL.MENU.PERSONALDATA.SUBTITLE',
          icon: 'contact',
          subicon: "",
          link: PersonaldataPage,
          params: ""
        },
        {
          id: "app-contactperson",
          title: 'PERSONAL.MENU.CONTACTPERSON.TITLE',
          subtitle: 'PERSONAL.MENU.CONTACTPERSON.SUBTITLE',
          icon: 'contacts',
          subicon: "",
          link: ContactpersonPage,
          params: this.team
        }
      ];

    })
    .catch(error => {
      console.log(error);
    })

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
