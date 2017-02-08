import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class SettingsService {
  private selectedTheme: BehaviorSubject<string>;
  availableThemes: {className: string, prettyName: string}[];

  constructor() {
    this.selectedTheme = new BehaviorSubject('vw-theme');

    this.availableThemes = [
      {className: 'vw-theme', prettyName: 'Volkswagen'},
      {className: 'man-theme', prettyName: 'MAN'},
      {className: 'porsche-theme', prettyName: 'Porsche'}
    ];
  }

  setTheme(val) {
    this.selectedTheme.next(val);
  }

  getTheme() {
    return this.selectedTheme.asObservable();
  }
}
