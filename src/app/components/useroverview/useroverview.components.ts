import {Component} from "@angular/core";
import {InAppBrowser} from 'ionic-native';
import {NavController} from "ionic-angular";
import {NavParams} from "ionic-angular";
import {PersonService} from "../../services/person.service";
import {UserDetailsPage} from "../userdetails/user-details.component";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'page-user-overview',
  templateUrl: 'useroverview.html',
  providers: [PersonService]
})
export class UserOverviewPage {
  team: Object = null;
  
  constructor(private userService: UserService, private personService: PersonService, public navCtrl: NavController,
          private navParams: NavParams) {
  
    this.team = navParams.data;
    
  }
  
  getStatus = function(member) {
      if(this.userService.isEmployee()) {
          return "not-allowed";
      } else {
          return member.Status;
      }
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
    if(this.userService.isManager() && member.Details === "true") {
        this.navCtrl.push(UserDetailsPage, member);    
    }  
  }
}
