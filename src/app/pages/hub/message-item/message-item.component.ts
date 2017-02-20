import {Component, Input} from "@angular/core";

@Component({
  selector: 'message-item',
  templateUrl: 'message-item.html'
})

export class MessageItem {
  @Input() content:Object;
  @Input() liked:boolean;

  constructor() { }
}
