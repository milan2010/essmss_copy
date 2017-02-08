import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import { TranslateService } from 'ng2-translate';
import {StatusBar, Splashscreen} from 'ionic-native';

import {LoginPage} from './pages/login/login.component';
import {TabsPage} from './pages/tabs/tabs.component';

import {UserService} from './services/user.service';
import { SettingsService } from './pages/settings/settings.service';

@Component({
  templateUrl: 'app.html',
  providers: [UserService, SettingsService]
})

export class MyApp {
  rootPage: any = this.userService.isLoggedIn() ? TabsPage : LoginPage;
  chosenTheme: string;

  constructor(platform: Platform, private userService: UserService, translate: TranslateService, private settingsService: SettingsService) {
    // Subscribe to theme changes and set a default chosen theme
    this.settingsService.getTheme().subscribe(val => this.chosenTheme = val);

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
      // this language will be used as a fallback when a translation isn't found in the current language
      translate.setDefaultLang(settingsService.defaultLanguage);
      // the lang to use, if the lang isn't available, it will use the current loader to get them
      translate.use(settingsService.defaultLanguage);
    });
  }
}
