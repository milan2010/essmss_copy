import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { LoadingController } from 'ionic-angular';
import { Tabs, NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {
  showStart = false;
  data = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder, public loadingCtrl: LoadingController, public navCtrl: NavController) { }

  login = function () {
    console.log(this.data);
    let loading = this.loadingCtrl.create();

    loading.present();

    this.navCtrl.push(TabsPage, {});

    setTimeout(() => {
      loading.dismiss();
    }, 1000);

  }
}
