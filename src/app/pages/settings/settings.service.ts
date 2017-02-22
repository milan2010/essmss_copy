import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';
import { TranslateService } from 'ng2-translate';

@Injectable()
export class SettingsService {

  private selectedTheme: BehaviorSubject<string>;
  availableThemes: {className: string, prettyName: string}[];

  public static DEFAULT_LANGUAGE: string = "de";
  private selectedLanguage: BehaviorSubject<string>;
  availableLanguages: {className: string, prettyName: string}[];

  feedChannels: {channelName: string, filterId:number, icon: string, shown: boolean}[];

  constructor(private translate: TranslateService) {
    this.selectedTheme = new BehaviorSubject("vw-theme");
    this.availableThemes = [
      {className: "vw-theme", prettyName: "Volkswagen"},
      {className: "man-theme", prettyName: "MAN"},
      {className: "porsche-theme", prettyName: "Porsche"}
    ];

    this.selectedLanguage = new BehaviorSubject(SettingsService.DEFAULT_LANGUAGE);
    this.availableLanguages = [
      {className: "de", prettyName: "Deutsch"},
      {className: "en", prettyName: "English"},
      {className: "fr", prettyName: "Français"},
      {className: "cn", prettyName: "中國"}
    ];

    this.feedChannels = [
      {channelName: "SETTINGS.GENERAL.FEEDCHANNELS.CALENDAR.TITLE", filterId:4, icon:"calendar", shown: true},
      {channelName: "SETTINGS.GENERAL.FEEDCHANNELS.NEWS.TITLE", filterId:1, icon:"paper", shown: true},
      {channelName: "SETTINGS.GENERAL.FEEDCHANNELS.EXPENSE.TITLE", filterId:3, icon:"logo-euro", shown: true},
      {channelName: "SETTINGS.GENERAL.FEEDCHANNELS.MESSAGE.TITLE", filterId:2, icon:"information-circle", shown: true}
    ]
  }

  setLanguage(val) {
    this.selectedLanguage.next(val);
    this.translate.use(val);
  }

  getLanguage() {
      return this.selectedLanguage.asObservable();
  }

  setTheme(val) {
    this.selectedTheme.next(val);
  }

  getTheme() {
    return this.selectedTheme.asObservable();
  }

  setFeedChannels(val) {
    this.feedChannels = val;
  }

  getFeedChannels() {
    return this.feedChannels;
  }
}
