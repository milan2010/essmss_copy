import {Component} from '@angular/core';
import {Validators, FormBuilder} from '@angular/forms';
import {NavController} from 'ionic-angular';
import {TabsPage} from '../tabs/tabs.component';

import {LoginService} from './login.service';
import {UserService} from '../../services/user.service'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [LoginService, UserService]
})

export class LoginPage {
  showStart = true;
  data = this.formBuilder.group({
    username: ['manager'],
    password: ['12345678'],
  });

  constructor(private formBuilder: FormBuilder, public navCtrl: NavController, private loginService: LoginService, private userService: UserService) {
  }

  login = function () {
    console.log(this.data);
    if (this.data.invalid || (this.data.value.username && this.data.value.username.toLowerCase() !== 'manager' && this.data.value.username.toLowerCase() !== 'employee')) {
      return;
    }

    this.loginService.auth(this.data.value.username, this.data.value.password)
      .then(data => {
        this.userService.setUser(data);
        this.navCtrl.push(TabsPage);
      })
      .catch(error => {
        console.log(error);
      })

  }
}
