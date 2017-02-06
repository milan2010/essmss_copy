import {Component} from '@angular/core';

import {TeamService} from "./team.service";
import {TeamMembersPage} from "./members/members.components";
import {NavController} from "ionic-angular";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'page-team',
  templateUrl: 'team.html',
  providers: [TeamService,UserService]
})
export class TeamPage {
  userData: Object = null;
  team = null;
  menuItems: Array<{title: string, subtitle:string, icon:string, subicon:string, link:Object }> = [
    {
      title: "TEAM.MENU.TEAMMEMBERS.TITLE",
      subtitle: "TEAM.MENU.TEAMMEMBERS.SUBTITLE",
      icon: "people",
      subicon: "people",
      link: TeamMembersPage
    },
    {
      title: 'TEAM.MENU.HOLIDAY.TITLE',
      subtitle: 'TEAM.MENU.HOLIDAY.SUBTITLE',
      icon: 'calendar',
      subicon: "calendar",
      link: TeamMembersPage
    }
  ];

  constructor(private userService: UserService, private nav: NavController, private teamService: TeamService) {
    this.userData = this.userService.getData();

    teamService.getTeam()
      .then(data => {
        this.team = data;
      })
      .catch(error => {
        console.log(error);
      })
  }

}
