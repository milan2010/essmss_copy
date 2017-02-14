import { Component } from '@angular/core';
import { UserService } from "../../../services/user.service";


@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
  providers: [UserService]
})

export class AccountPage {

  constructor(private userService: UserService) {

  }

  logOut(){
    this.userService.logOut();
    window.location.reload();
  }

  saveAccountSettings(){
    console.log("saveAccountSettings");
  }
}
