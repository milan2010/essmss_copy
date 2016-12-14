import { Component, Input, SimpleChange} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
//import { Content } from 'ionic-angular'

@Component({
  selector: 'ion-profile-header',
  templateUrl: 'ion-profile-header.html'
})
export class IonProfileHeader {
  @Input() options: IonProfileHeaderOptions;

  _options = {};

  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    if (this.options === undefined || this.options === null) {
      console.error('[IonProfileHeader] options are not defined.');
    }
    this._options = this.options;
  }

  ngOnChanges(changes: { [propName: string]: SimpleChange }) {
    let o: SimpleChange = changes['options'];
    if (this.options && o && !o.isFirstChange()) {
      console.log('updating options');
      console.log(o.currentValue);
      this._options = o.currentValue;
    }
  }

  trustContent(content: string): SafeHtml {
    return this._sanitizer.bypassSecurityTrustHtml(content);
  }
}

export interface IonProfileHeaderOptions {
  background: {
    url: string,
    classes?: string,
    blur?: {
      value?: string,
      colors?: {
        start?: string,
        mid?: string,
        end?: string
      }
    }
  },
  img: {
    url: string,
    classes?: string
  },
  name: {
    text: string,
    classes?: string
  },
  subtext?: {
    text?: string,
    classes?: string
  }
}



