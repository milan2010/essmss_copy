import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {InAppBrowser} from "ionic-native";
import {PersonService} from "../../../services/person.service";

@Component({
  selector: 'page-contactperson',
  templateUrl: 'contactperson.html',
  providers: [PersonService]
})
export class ContactpersonPage {
  team: Object = null;

  constructor(public navCtrl: NavController, private personService: PersonService) {
    this.team = personService.getContacts()
      .then(data => {
        this.team = data;
      })
      .catch(error => {
        console.log(error);
      })  
  }

  sendEmail = function (email) {
    new InAppBrowser('mailto:' + email, '_system');
  }

  callPhone = function (phone) {
    new InAppBrowser('tel:' + phone, '_system');
  }
  
  goToMemberDetails = function (member) {
//    this.navCtrl.push(TeamMemberDetailsPage, member);
  }
  
}
