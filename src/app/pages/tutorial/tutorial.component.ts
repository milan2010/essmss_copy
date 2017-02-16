import { Component } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs.component';
import { LoginPage } from '../login/login.component';
import { UserService } from '../../services/user.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})

export class TutorialPage {
  showSkip:boolean = true;
  isReview:boolean = false;
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

  constructor(private navCtrl: NavController, private storageService: StorageService, private userService: UserService, private navParams: NavParams) {
    this.isReview = navParams.get("reviewd");
  }

  startApp() {
    if (this.isReview) {
      this.navCtrl.pop();
    } else {
      if(this.userService.isLoggedIn()){
        this.navCtrl.push(TabsPage).then(() => {
          this.storageService.set(StorageService.TUTORIAL_SHOWN, true);
        });
      } else {
        this.navCtrl.push(LoginPage).then(() => {
          this.storageService.set(StorageService.TUTORIAL_SHOWN, true);
        });
      }
    }

  }

  onSlideChangeStart(slider: Slides) {
    this.showSkip = !slider.isEnd();
  }
}
