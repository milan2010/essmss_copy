import {Component, Input} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'calendar',
  templateUrl: 'calendar.html'
})
export class Calendar {

  @Input() data = [];
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
    this.removeTime(next.add(1, 'months').startOf('month').startOf('week'));
    this.month.add(1, 'months');
    this.buildMonth(next);
  };

  previous = function () {
    let previous = this.month.clone();
    this.removeTime(previous.subtract(1, 'months').startOf('month').startOf('week'));
    this.month.subtract(1, 'months');
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

      let day = {
        name: date.format("dd").substring(0, 1),
        number: date.date(),
        isCurrentMonth: date.month() === month.month(),
        isToday: date.isSame(new Date(), "day"),
        date: date,
        plan: {}
      };

      for (let j = 0; j < this.data.length; j++) {

        if (this.data[j]) {
          let datePlan = moment(this.data[j].Datum);

          if (day.date.month() === datePlan.month() && day.date.date() === datePlan.date()) {
            day.plan = {
              begin : this.data[j].Beguz,
              end: this.data[j].Enduz,
              type : this.data[j].Kuerzel,
              background: this.data[j].Background
            }
          }
        }

      }

      days.push(day);
      date = date.clone();
      date.add(1, "d");
    }
    return days;
  };
}
