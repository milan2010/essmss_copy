import {Component, Input} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'calendar',
  templateUrl: 'calendar.html'
})
export class Calendar {

  @Input() data = [];
  weekDays = [];
  selected = {
    date: null,
    plan: null
  };
  month = null;
  weeks = [];
  types = [];

  constructor() {
    this.weekDays = moment().localeData().weekdaysShort();
  }

  ngOnChanges() {
    this.selected.date = this.removeTime(this.selected.date || moment());
    this.month = this.selected.date.clone();

    let start = this.selected.date.clone();
    start.date(1);
    this.removeTime(start.day(0));
    this.buildMonth(start);
  }

  select = function (day) {
    this.selected = day;
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
    this.weeks = [];
    this.types = [];
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
        plan: {
          begin: null,
          end: null,
          type: null,
          background: null
        }
      };

      for (let j = 0; j < this.data.length; j++) {

        if (this.data[j]) {
          let datePlan = moment(this.data[j].Datum);

          if (day.date.month() === datePlan.month() && day.date.date() === datePlan.date()) {
            day.plan = {
              begin: this.parseTime(this.data[j].Beguz),
              end: this.parseTime(this.data[j].Enduz),
              type: this.data[j].Kuerzel,
              background: this.data[j].Background
            };

            let addType = true;
            for (let t = 0; t < this.types.length; t++) {
              if (this.types[t].id === day.plan.type) {
                addType = false;
                break;
              }
            }

            if (addType) {
              this.types.push({
                id: day.plan.type,
                background: day.plan.background
              })
            }
          }
        }

      }

      if (day.isToday) {
        this.select(day);
      }

      days.push(day);
      date = date.clone();
      date.add(1, "d");
    }
    return days;
  };

  parseTime = function (time) {
    let h = time.slice(time.indexOf('H') - 2, time.indexOf('H'));
    let m = time.slice(time.indexOf('M') - 2, time.indexOf('M'));
    let s = time.slice(time.indexOf('S') - 2, time.indexOf('S'));
    return h + ':' + m + (s === '00' ? '' : s) + ' Uhr';
  };

  getLongDateFormat = function () {
    return this.selected.date.format('dddd, DD. MMMM YYYY');
    // return 'Donnerstag, 06. Dezember 2016';
  }
}
