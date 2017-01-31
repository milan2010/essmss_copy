import {Component} from "@angular/core";
import {InAppBrowser} from 'ionic-native';
import {NavController} from "ionic-angular";

import {TeamService} from "../team.service";
import {TeamMemberDetailsPage} from "../memberdetails/member-details.component";

@Component({
  selector: 'page-team-members',
  templateUrl: 'members.html',
  providers: [TeamService]
})
export class TeamMembersPage {
  team: Object = null;

  constructor(private teamService: TeamService, public navCtrl: NavController) {
    teamService.getTeam()
      .then(data => {
        this.team = data;
      })
      .catch(error => {
        console.log(error);
      })
  }

  sendEmail = function (email) {
    new InAppBrowser('mailto:' + email, '_system');
  };

  callPhone = function (phone) {
    new InAppBrowser('tel:' + phone, '_system');
  };

  goToMemberDetails = function (member) {
    this.navCtrl.push(TeamMemberDetailsPage, member);
  }
}
