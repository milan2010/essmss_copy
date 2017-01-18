import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {WorkingTimeService} from "./workingtime.services";

@Component({
  selector: 'page-workingtime',
  templateUrl: 'workingtime.html',
  providers: [WorkingTimeService]
})
export class WorkingtimePage {
  workingTimeData:Object = null;

  constructor(public navCtrl: NavController, private workingTimeService: WorkingTimeService) {
    workingTimeService.getData()
      .then(data => {
        this.workingTimeData = data;
        console.log(this.workingTimeData);
      })
      .catch(error => {
        console.log(error);
      })
  }

  ionViewDidLoad() {
    console.log('Hello WorkingtimePage Page');
  }

}
