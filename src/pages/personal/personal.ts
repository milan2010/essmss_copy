import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

/*
 Generated class for the Personal page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-personal',
  templateUrl: 'personal.html'
})
export class PersonalPage {
  test: string;
  personalMenu: any[];
  options: any;

  constructor(public navCtrl: NavController) {
    this.personalMenu = [
      {
        icon: 'md-time',
        title: 'Arbeitszeit',
        subtitle: 'Aktueller Stand'
      },
      {
        icon: 'md-plane',
        title: 'Urlaub & Abwesenheit',
        subtitle: 'Aktueller Stand'
      },
      {
        icon: 'md-document',
        title: 'Lohnabrechnung',
        subtitle: 'Aktueller Stand'
      },
      {
        icon: 'ios-contact',
        title: 'Stammdaten',
        subtitle: 'Aktueller Stand'
      },
      {
        icon: 'ios-contacts',
        title: 'Ansprechpartner',
        subtitle: 'Aktueller Stand'
      }];

    this.options = {
      background: {
        url: "assets/img/header1.jpeg",
        classes: "your-custom-optional-background-class",
        blur: {
          value: '0',
          colors: {
            start: 'rgba(0, 0, 0, 0.4)',
            mid: 'rgba(35, 162, 212, 0.8)',
            end: 'rgba(35, 162, 212, 0.6)'
          }
        }
      },
      img: {
        url: "assets/img/bernd.png",
        classes: "your-custom-optional-img-class"
      },
      name: {
        text: "Bernd Müller",
        classes: 'your-custom-optional-name-class'
      },
      subtext: {
        text: "PWF1-KK/DAA",
        classes: 'your-custom-optional-subtext-class'
      }
    };

  }

  ionViewDidLoad() {
    console.log('Hello PersonalPage Page');
  }

}
