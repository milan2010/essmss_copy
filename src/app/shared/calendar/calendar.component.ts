import {Component} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'calendar',
  templateUrl: 'calendar.html'
})
export class Calendar {

  selected = null;
  month = null;
  weeks = [];

  constructor() {
    this.selected = this.removeTime(this.selected || moment());
    this.month = this.selected.clone();

    let start = this.selected.clone();
    start.date(1);
    this.removeTime(start.day(0));
    this.buildMonth(start);
  }

  select = function (day) {
    this.selected = day.date;
  };

  next = function () {
    let next = this.month.clone();
    this.removeTime(next.month(next.month() + 1)).date(1);
    this.month.month(this.month.month() + 1);
    this.buildMonth(next);
  };

  previous = function () {
    let previous = this.month.clone();
    this.removeTime(previous.month(previous.month() - 1).date(1));
    this.month.month(this.month.month() - 1);
    this.buildMonth(previous);
  };

  removeTime = function (date) {
    return date.day(0).hour(0).minute(0).second(0).millisecond(0);
  };

  buildMonth = function (start) {
    console.log(start);
    this.weeks = [];
    let done = false, date = start.clone(), monthIndex = date.month(), count = 0;
    while (!done) {
      this.weeks.push({days: this.buildWeek(date.clone(), this.month)});
      date.add(1, "w");
      done = count++ > 2 && monthIndex !== date.month();
      monthIndex = date.month();
    }
  };

  buildWeek = function (date, month) {
    let days = [];
    for (let i = 0; i < 7; i++) {
      days.push({
        name: date.format("dd").substring(0, 1),
        number: date.date(),
        isCurrentMonth: date.month() === month.month(),
        isToday: date.isSame(new Date(), "day"),
        date: date
      });
      date = date.clone();
      date.add(1, "d");
    }
    return days;
  };
}
