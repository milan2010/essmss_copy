import {Component, Input} from '@angular/core';

@Component({
  selector: 'expense-item-list',
  templateUrl: 'expense-item-list.html'
})
export class ExpenseItemList {
  @Input() list;

  constructor() {
  }

  expand = function (id) {
    if (this.expanded === id) {
      this.expanded = 0;
    } else {
      this.expanded = id;
    }
  }
}
