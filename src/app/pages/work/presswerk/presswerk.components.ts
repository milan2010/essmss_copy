import {Component} from "@angular/core";
import {NavController} from "ionic-angular";

@Component({
  selector: 'page-presswerk',
  templateUrl: 'presswerk.html'
})
export class PresswerkPage {
  userData: Object = null;
  team: Object = null;
  menuItems: Array<{title: string, subtitle:string, icon:string, subicon:string, link:Object }> = [
    {
      title: "WORK.MENU.PRESS.MENU.CONTACT.TITLE",
      subtitle: "WORK.MENU.PRESS.MENU.CONTACT.SUBTITLE",
      icon: "people",
      subicon: "person",
      link: PresswerkPage
    },
    {
      title: 'WORK.MENU.PRESS.MENU.REPORTS.TITLE',
      subtitle: 'WORK.MENU.PRESS.MENU.REPORTS.SUBTITLE',
      icon: "information-circle",
      subicon: "information-circle",
      link: PresswerkPage
    }
  ];

  constructor(public navCtrl: NavController) {
  }

}
