import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import { TranslateService } from 'ng2-translate';
import {StatusBar, Splashscreen} from 'ionic-native';

import {UserService} from './services/user.service';
import {LoginPage} from './pages/login/login.component';
import {TabsPage} from './pages/tabs/tabs.component';

@Component({
  templateUrl: 'app.html',
  providers: [UserService]
})

export class MyApp {
  rootPage = this.userService.isLoggedIn() ? TabsPage : LoginPage;

  constructor(platform: Platform, private userService: UserService, translate: TranslateService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
      // this language will be used as a fallback when a translation isn't found in the current language
      translate.setDefaultLang('de');
      // the lang to use, if the lang isn't available, it will use the current loader to get them
      translate.use('de');
    });
  }
}
