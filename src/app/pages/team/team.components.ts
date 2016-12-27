import {Component} from '@angular/core';
import {TeamService} from "./team.service";

@Component({
  selector: 'page-team',
  templateUrl: 'team.html',
  providers: [TeamService]
})
export class TeamPage {
  team = null;

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
