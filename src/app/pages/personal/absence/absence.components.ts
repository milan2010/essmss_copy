import { AddMeetingPage } from './../../add-meeting/add-meeting.component';
import {Component} from '@angular/core';
import {AbsenceService} from "./absence.service";
import {AbsenceTypesService} from "./absence-types.service";
import { ModalController } from 'ionic-angular';

@Component({
  selector: 'page-absence',
  templateUrl: 'absence.html',
  providers: [AbsenceService, AbsenceTypesService]
})
export class AbsencePage {
  absenceData: Array<Object> = [];
  absenceTypes: Array<Object> = [];
  img1Visible = false;

  constructor(private absenceService: AbsenceService, 
  private absenceTypesService: AbsenceTypesService,public modalCtrl: ModalController) {

    absenceTypesService.getData()
      .then(data => {
        this.absenceTypes = data;

        absenceService.getData()
          .then(data => {
            this.absenceData = data;
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        console.log(error);
      });
  }

  startSlideshow() {
      let commentsModal = this.modalCtrl.create(AddMeetingPage);
      commentsModal.present();
        setTimeout(() => this.absenceService.getData2()
          .then(data => {
            this.absenceData = data;
          })
          .catch(error => {
            console.log(error);
          }), 1000)
  }
}
