import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import { TranslateService } from 'ng2-translate';
import {StatusBar, Splashscreen} from 'ionic-native';

import {LoginPage} from './pages/login/login.component';
import {TabsPage} from './pages/tabs/tabs.component';
import {TutorialPage} from './pages/tutorial/tutorial.component';

import {UserService} from './services/user.service';
import {PersonService} from "./services/person.service";
import { SettingsService } from './pages/settings/settings.service';
import { AuthorizationService } from './services/authorization.service';
import { StorageService } from './services/storage.service';

@Component({
  templateUrl: 'app.html',
  providers: [UserService, SettingsService, AuthorizationService, PersonService, StorageService]
})

export class MyApp {
  rootPage: any;
  chosenTheme: string;

  constructor(private platform: Platform, private storageService: StorageService, private userService: UserService, private translate: TranslateService, private settingsService: SettingsService, private authorizationService: AuthorizationService) {
    this.storageService.get(StorageService.TUTORIAL_SHOWN)
      .then((hasSeenTutorial) => {

        if(hasSeenTutorial){
          if(this.userService.isLoggedIn()){
            this.rootPage = TabsPage;
          } else {
            this.rootPage = LoginPage;
          }
        } else {
          if(this.userService.isLoggedIn()){
            this.rootPage = TabsPage;
          } else {
            this.rootPage = TutorialPage;
          }
        }

        this.platformReady();
      });
  }

  platformReady(){
    this.platform.ready().then(() => {
      // Subscribe to theme changes and set a default chosen theme
      this.settingsService.getTheme().subscribe(val => this.chosenTheme = val);
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
      // this language will be used as a fallback when a translation isn't found in the current language
      this.translate.setDefaultLang(this.settingsService.defaultLanguage);
      // the lang to use, if the lang isn't available, it will use the current loader to get them
      this.translate.use(this.settingsService.defaultLanguage);
    });
  }
}
