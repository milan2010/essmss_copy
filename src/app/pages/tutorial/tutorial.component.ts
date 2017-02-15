import { Component } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HubPage } from '../hub/hub.components';
import { TabsPage } from '../tabs/tabs.component';
import { LoginPage } from '../login/login.component';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})

export class TutorialPage {
  showSkip:boolean = true;
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

  constructor(private navCtrl: NavController, private storage: Storage, private userService: UserService) { }

  startApp() {
    this.storage.get("tutorialStartedFromSettings")
    .then((tutorialStartedFromSettings) => {
      if (tutorialStartedFromSettings) {
        this.storage.remove("tutorialStartedFromSettings");
        this.navCtrl.pop();
      } else {
        if(this.userService.isLoggedIn()){
          this.navCtrl.push(TabsPage).then(() => {
            this.storage.set("hasSeenTutorial", true);
          });
        } else {
          this.navCtrl.push(LoginPage).then(() => {
            this.storage.set("hasSeenTutorial", true);
          });
        }
      }
    });
  }

  onSlideChangeStart(slider: Slides) {
    this.showSkip = !slider.isEnd();
  }
}
