import {Component} from "@angular/core";
import {InAppBrowser} from 'ionic-native';

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

  sendEmail = function (email) {
    let browser = new InAppBrowser('mailto:' + email, '_system');
    browser.show();
  };

  callPhone = function (phone) {
    let browser = new InAppBrowser('tel:' + phone, '_system');
    browser.show();
  };
}
