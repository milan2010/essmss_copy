import {Component, Input} from "@angular/core";

@Component({
  selector: 'expense-item',
  templateUrl: 'expense-item.html'
})

export class ExpenseItem {
  @Input() content: Object = null;

  constructor() {

  }
}
