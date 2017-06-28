import {Component} from '@angular/core';
import {NavController} from "ionic-angular";
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'add-meeting-Page',
  templateUrl: 'add-meeting.html'
})

export class AddMeetingPage {
  img1Visible = true;
  img2Visible = false;
  img3Visible = false;
  img4Visible = false;
  img5Visible = false;

  constructor(private nav: NavController, private viewCtrl: ViewController) {
  }

  closeMeeting() {
    this.viewCtrl.dismiss();
  }
}