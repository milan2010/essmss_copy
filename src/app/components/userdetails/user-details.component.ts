import {Component} from "@angular/core";
import {NavParams} from "ionic-angular";

@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html'
})
export class UserDetailsPage {
  userData: Object = null;
  menuItems: Array<{title: string, subtitle:string, icon:string, subicon:string, link:Object, params:Object }> = [
    {
      title: "TEAM.MENU.TEAMMEMBERS.DETAILS.MENU.QUALIFICATIONS.TITLE",
      subtitle: "TEAM.MENU.TEAMMEMBERS.DETAILS.MENU.QUALIFICATIONS.SUBTITLE",
      icon: "star-outline",
      subicon: "",
      link: "",
      params: ""
    },
    {
      title: "TEAM.MENU.TEAMMEMBERS.DETAILS.MENU.INFO.TITLE",
      subtitle: "TEAM.MENU.TEAMMEMBERS.DETAILS.MENU.INFO.SUBTITLE",
      icon: "information-circle-outline",
      subicon: "",
      link: "",
      params: ""
    },
    {
      title: "TEAM.MENU.TEAMMEMBERS.DETAILS.MENU.ABSENCE.TITLE",
      subtitle: "TEAM.MENU.TEAMMEMBERS.DETAILS.MENU.ABSENCE.SUBTITLE",
      icon: "plane",
      subicon: "",
      link: "",
      params: ""
    },
    {
      title: "TEAM.MENU.TEAMMEMBERS.DETAILS.MENU.LIMITATIONS.TITLE",
      subtitle: "TEAM.MENU.TEAMMEMBERS.DETAILS.MENU.LIMITATIONS.SUBTITLE",
      icon: "information-circle-outline",
      subicon: "",
      link: "",
      params: ""
    },
    {
      title: "TEAM.MENU.TEAMMEMBERS.DETAILS.MENU.INSTRUCTIONS.TITLE",
      subtitle: "TEAM.MENU.TEAMMEMBERS.DETAILS.MENU.INSTRUCTIONS.SUBTITLE",
      icon: "folder-open",
      subicon: "",
      link: "",
      params: ""
    }
  ];


  constructor(private navParams: NavParams) {
    console.log(navParams.data);
    this.userData = navParams.data;
  }
}
