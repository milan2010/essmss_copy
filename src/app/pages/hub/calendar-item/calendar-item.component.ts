import {Component, Input} from "@angular/core";

@Component({
  selector: 'calendar-item',
  templateUrl: 'calendar-item.html'
})

export class CalendarItem {
  @Input() content:Object;
  @Input() liked:boolean;

  constructor() { }
}
