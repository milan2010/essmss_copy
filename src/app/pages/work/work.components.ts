import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PresswerkPage} from "./presswerk/presswerk.components";
import {CanteenPage} from "./canteen/canteen.component";
import {AuthorizationService} from '../../services/authorization.service';

@Component({
  selector: 'page-work',
  templateUrl: 'work.html'
})
export class WorkPage {
  menuItems: Array<{id: string, title: string, subtitle:string, icon:string, subicon:string, link:Object }> = [
    {
      id: "app-press",
      title: "WORK.MENU.PRESS.TITLE",
      subtitle: "WORK.MENU.PRESS.SUBTITLE",
      icon: "briefcase",
      subicon: "",
      link: PresswerkPage
    },
    {
      id: "app-canteen",
      title: 'WORK.MENU.CANTEEN.TITLE',
      subtitle: 'WORK.MENU.CANTEEN.SUBTITLE',
      icon: 'pizza',
      subicon: "",
      link: CanteenPage
    }
  ];

  constructor(public nav: NavController, private authorizationService: AuthorizationService) {
  }

  goToMachine() {
    this.nav.push(PresswerkPage);
  }

  goToKantine() {
    this.nav.push(CanteenPage);
  }

}
