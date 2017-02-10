import {Component} from "@angular/core";
import {InAppBrowser} from 'ionic-native';
import {NavController} from "ionic-angular";
import {PersonService} from "../../../services/person.service";
import {TeamMemberDetailsPage} from "../memberdetails/member-details.component";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'page-team-members',
  templateUrl: 'members.html',
  providers: [PersonService]
})
export class TeamMembersPage {
  team: Object = null;

  constructor(private userService: UserService, private personService: PersonService, public navCtrl: NavController) {
      
    personService.getTeam()
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
    if(member.Details === "true") {
        this.navCtrl.push(TeamMemberDetailsPage, member);    
    }  
  }
}
