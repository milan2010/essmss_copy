import {Component, Input, SimpleChange} from '@angular/core';

@Component({
  selector: 'ion-profile-header',
  templateUrl: 'ion-profile-header.html'
})
export class IonProfileHeader {
  @Input() data;

  constructor() {
  }
}


