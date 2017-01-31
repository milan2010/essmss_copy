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
    username: [''],
    password: [''],
  });

  constructor(private formBuilder: FormBuilder, public navCtrl: NavController, private loginService: LoginService, private userService: UserService) {
  }

  login = function () {
    if (this.data.invalid) {
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
