import {Component, Input} from "@angular/core";

@Component({
  selector: 'list-item',
  templateUrl: 'listitem.component.html'
})

export class ListItemComponent {
  @Input() content: Array<{title: string, subtitleprefix: string, subtitle:string, icon:string, subicon:string, link:Object, params:Object }> = null;

  constructor() { }
}
