import {Component} from '@angular/core';
import {AbsenceService} from "./absence.service";
import {AbsenceTypesService} from "./absence-types.service";

@Component({
  selector: 'page-absence',
  templateUrl: 'absence.html',
  providers: [AbsenceService, AbsenceTypesService]
})
export class AbsencePage {
  absenceData: Array<Object> = [];
  absenceTypes: Array<Object> = [];

  constructor(private absenceService: AbsenceService, private absenceTypesService: AbsenceTypesService) {

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
}
