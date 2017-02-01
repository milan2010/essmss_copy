import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PresswerkPage} from "./presswerk/presswerk.components";

@Component({
  selector: 'page-work',
  templateUrl: 'work.html'
})
export class WorkPage {

  constructor(public nav: NavController) {
  }
  
  goToMachine() {
    this.nav.push(PresswerkPage);
  }
  
  goToKantine() {
//    this.nav.push(KantinePage);
  }

}
