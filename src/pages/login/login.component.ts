import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { LoadingController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { LoginService } from './login.service';
import { UserService } from '../../services/user.service'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [LoginService, UserService]
})

export class LoginPage {
  showStart = false;
  data = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder, public loadingCtrl: LoadingController, public navCtrl: NavController, private loginService: LoginService, private userService: UserService) { }

  login = function () {
    if (this.data.invalid){
      return;
    }

    this.loginService.auth(this.data.username, this.data.password)
      .then(data => {
        this.userService.setUser(data);
        this.navCtrl.push(TabsPage, {});
      })
      .catch(error => {
        console.log(error);
      })

  }
}
