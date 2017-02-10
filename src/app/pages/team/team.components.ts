import {Component} from '@angular/core';

import {PersonService} from "../../services/person.service";
import {UserOverviewPage} from "../../components/useroverview/useroverview.components";
import {TeamMembersPage} from "./members/members.components";
import {NavController} from "ionic-angular";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'page-team',
  templateUrl: 'team.html',
  providers: [PersonService]
})
export class TeamPage {
  team = null;
  menuItems: Array<{title: string, subtitle:string, icon:string, subicon:string, link:Object, params:Object }> = [];
  /*  
  {
      title: "TEAM.MENU.TEAMMEMBERS.TITLE",
      subtitle: "TEAM.MENU.TEAMMEMBERS.SUBTITLE",
      icon: "people",
      subicon: "people",
      link: UserOverviewPage,
      params: this.team
    },
    {
      title: 'TEAM.MENU.HOLIDAY.TITLE',
      subtitle: 'TEAM.MENU.HOLIDAY.SUBTITLE',
      icon: 'calendar',
      subicon: "calendar",
      link: UserOverviewPage,
      params: ""
    }
  ];
  */

  constructor(private userService: UserService, private nav: NavController, private personService: PersonService) {

    personService.getTeam()
      .then(data => {
        this.team = data;
        this.menuItems = [
            {
              title: "TEAM.MENU.TEAMMEMBERS.TITLE",
              subtitle: "TEAM.MENU.TEAMMEMBERS.SUBTITLE",
              icon: "people",
              subicon: "people",
              link: TeamMembersPage,
              params: this.team
            },
            {
              title: 'TEAM.MENU.HOLIDAY.TITLE',
              subtitle: 'TEAM.MENU.HOLIDAY.SUBTITLE',
              icon: 'calendar',
              subicon: "calendar",
              link: UserOverviewPage,
              params: ""
            }
          ];
        
        console.log(this.team);
        console.log(this.menuItems);
        
      })
      .catch(error => {
        console.log(error);
      })
  }

}
