import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PersonalDataService} from "./personalData.service";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'page-personaldata',
  templateUrl: 'personaldata.html',
  providers: [PersonalDataService]
})
export class PersonaldataPage {
  edit:boolean = false;
  userData: Object = null;
  personalData: { firstname:string, lastname:string, street:string, number:string, postcode:string, city:string, email:string, mobile:string } = {
    firstname: "",
    lastname: "",
    street: "",
    number: "",
    postcode: "",
    city: "",
    email: "",
    mobile: ""
  };

  constructor(public navCtrl: NavController, private userService: UserService, private personalDataService: PersonalDataService) {

    this.personalDataService.getData(this.userService.isManager())
    .then(data => {
      this.personalData = data;
    })
    .catch(error => {
      console.log(error);
    });
  }

  editPersonalData(){
    this.edit = true;
  }

  savePersonalData() {
    this.edit = false;
  }

}
