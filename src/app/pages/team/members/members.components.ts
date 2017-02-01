import {Component} from "@angular/core";
import {InAppBrowser} from 'ionic-native';
import {NavController} from "ionic-angular";

import {TeamService} from "../team.service";
import {TeamMemberDetailsPage} from "../memberdetails/member-details.component";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'page-team-members',
  templateUrl: 'members.html',
  providers: [TeamService, UserService]
})
export class TeamMembersPage {
  userData: Object = null;
  team: Object = null;

  constructor(private userService: UserService, private teamService: TeamService, public navCtrl: NavController) {
    this.userData = this.userService.getData();
      
    teamService.getTeam()
      .then(data => {
        this.team = data;
      })
      .catch(error => {
        console.log(error);
      })
  }

  sendEmail = function (e, email) {
      e.stopPropagation();
      new InAppBrowser('mailto:' + email, '_system');
  };

  callPhone = function (e, phone) {
      e.stopPropagation();
      new InAppBrowser('tel:' + phone, '_system');
  };

  goToMemberDetails = function (member) {
    this.navCtrl.push(TeamMemberDetailsPage, member);
  }
}
