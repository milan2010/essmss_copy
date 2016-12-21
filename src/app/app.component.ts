import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { UserService } from './services/user.service';
import { LoginPage } from './pages/login/login.component';
import { TabsPage } from './pages/tabs/tabs';

@Component({
  templateUrl: 'app.html',
  providers: [UserService]
})

export class MyApp {
  rootPage = this.userService.isLoggedIn() ? TabsPage : LoginPage;

  constructor(platform: Platform, private userService: UserService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
