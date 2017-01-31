import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {WorkingTimeService} from "./workingtime.services";
import {WorkingtimeTypesService} from "./workingtime-types.service";

@Component({
  selector: 'page-workingtime',
  templateUrl: 'workingtime.html',
  providers: [WorkingTimeService, WorkingtimeTypesService]
})
export class WorkingtimePage {
  workingTimeData: Array<Object> = [];
  workingTimeTypes: Array<Object> = [];

  constructor(public navCtrl: NavController, private workingTimeService: WorkingTimeService, private workingtimeTypesService: WorkingtimeTypesService) {
    workingtimeTypesService.getData()
      .then(data => {
        this.workingTimeTypes = data;

        workingTimeService.getData()
          .then(data => {
            this.workingTimeData = data;
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        console.log(error);
      });
  }
}
