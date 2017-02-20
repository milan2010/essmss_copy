import {Component, ViewChild} from '@angular/core';
import {Platform, NavController} from 'ionic-angular';
import {TranslateService} from 'ng2-translate';
import {StatusBar, Splashscreen, ThreeDeeTouch} from 'ionic-native';

import {LoginPage} from './pages/login/login.component';
import {TabsPage} from './pages/tabs/tabs.component';
import {TutorialPage} from './pages/tutorial/tutorial.component';

import {UserService} from './services/user.service';
import {PersonService} from "./services/person.service";
import {SettingsService} from './pages/settings/settings.service';
import {AuthorizationService} from './services/authorization.service';
import {StorageService} from './services/storage.service';
import {TeamPage} from "./pages/team/team.components";
import {ChatPage} from "./pages/chat/chat.component";
import {WorkPage} from "./pages/work/work.components";
import {WorkingtimePage} from "./pages/personal/workingtime/workingtime.components";

@Component({
  templateUrl: 'app.html',
  providers: [UserService, SettingsService, AuthorizationService, PersonService, StorageService]
})

export class MyApp {
  @ViewChild('myNav') nav: NavController;
  rootPage: any;
  chosenTheme: string;

  constructor(private platform: Platform, private storageService: StorageService, private userService: UserService, private translate: TranslateService, private settingsService: SettingsService, private authorizationService: AuthorizationService) {
    this.storageService.get(StorageService.TUTORIAL_SHOWN)
      .then((hasSeenTutorial) => {

        if (hasSeenTutorial) {
          if (this.userService.isLoggedIn()) {
            this.rootPage = TabsPage;
          } else {
            this.rootPage = LoginPage;
          }
        } else {
          if (this.userService.isLoggedIn()) {
            this.rootPage = TabsPage;
          } else {
            this.rootPage = TutorialPage;
          }
        }

      });

    this.platformReady();
  }

  platformReady() {
    this.platform.ready().then(() => {
      // Subscribe to theme changes and set a default chosen theme
      this.settingsService.getTheme().subscribe(val => this.chosenTheme = val);
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
      // this language will be used as a fallback when a translation isn't found in the current language
      this.translate.setDefaultLang(SettingsService.DEFAULT_LANGUAGE);
      // the lang to use, if the lang isn't available, it will use the current loader to get them
      this.translate.use(SettingsService.DEFAULT_LANGUAGE);
      this.prepare3dTouch();
    });
  }

  prepare3dTouch() {
    if (!this.platform.is('cordova')) {
      return;
    }

    ThreeDeeTouch.isAvailable()
      .then(isAvailable => {
        console.log("3D Touch available? " + isAvailable);
        if (isAvailable) {
          ThreeDeeTouch.configureQuickActions([
            {
              type: 'team',
              title: 'Mein Team',
              iconType: 'Contact'
            },
            {
              type: 'chat',
              title: 'Chat',
              iconType: 'Message'
            },
            {
              type: 'work',
              title: 'Meine Arbeit',
              iconType: 'Task'
            },
            {
              type: 'workingtime',
              title: 'Arbeitszeit',
              iconType: 'Date'
            }
          ]);

          ThreeDeeTouch.onHomeIconPressed().subscribe(
            (payload) => {
              console.log(payload.type);
              switch (payload.type) {
                case 'team':
                  this.nav.push(TeamPage);
                  break;
                case 'chat':
                  this.nav.push(ChatPage);
                  break;
                case 'work':
                  this.nav.push(WorkPage);
                  break;
                case 'workingtime':
                  this.nav.push(WorkingtimePage);
                  break;
              }
            }
          )
        }
      });
  }
}
