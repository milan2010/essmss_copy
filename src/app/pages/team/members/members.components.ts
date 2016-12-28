import {Component} from "@angular/core";

import {TeamService} from "../team.service";

@Component({
  selector: 'page-team-members',
  templateUrl: 'members.html',
  providers: [TeamService]
})
export class TeamMembersPage {
  team: Object = null;

  constructor(private teamService: TeamService) {
    teamService.getTeam()
      .then(data => {
        this.team = data;
      })
      .catch(error => {
        console.log(error);
      })
  }
}
