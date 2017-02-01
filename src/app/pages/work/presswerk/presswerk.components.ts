import {Component} from "@angular/core";
import {InAppBrowser} from 'ionic-native';
import {NavController} from "ionic-angular";

@Component({
  selector: 'page-presswerk',
  templateUrl: 'presswerk.html',
  providers: []
})
export class PresswerkPage {
  userData: Object = null;
  team: Object = null;

  constructor(public navCtrl: NavController) {
  }

}
