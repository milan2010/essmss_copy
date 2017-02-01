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

  slides = [
    {
      title: "Willkommen zu V.io",
      description: "Dein persönlicher Zugang zu den Volkswagen Services",
      image: "assets/img/iconuser.png",
    },
    {
      title: "Was kann V.io",
      description: "Deine Urlaubs- und Stundenzeiten immer im Blick",
      image: "assets/img/Iconurlaub.png",
    },
    {
      title: "Gehalt?",
      description: "Deine Finanzen immer im Blick!",
      image: "assets/img/iconGeld.png",
    }
  ];
  constructor(private formBuilder: FormBuilder, public navCtrl: NavController, private loginService: LoginService, private userService: UserService) {
  }

  login = function () {
    console.log(this.data);
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
