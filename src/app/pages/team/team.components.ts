import {Component} from '@angular/core';

import {TeamService} from "./team.service";
import {TeamMembersPage} from "./members/members.components";
import {NavController} from "ionic-angular";

@Component({
  selector: 'page-team',
  templateUrl: 'team.html',
  providers: [TeamService]
})
export class TeamPage {
  team = null;

  constructor(private nav: NavController, private teamService: TeamService) {
    teamService.getTeam()
      .then(data => {
        this.team = data;
      })
      .catch(error => {
        console.log(error);
      })
  }

  goToMembers() {
    this.nav.push(TeamMembersPage);
  }
}
