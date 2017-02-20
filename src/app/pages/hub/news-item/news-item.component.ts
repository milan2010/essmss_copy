import {Component, Input} from "@angular/core";

@Component({
  selector: 'news-item',
  templateUrl: 'news-item.html'
})

export class NewsItem {
  @Input() content:Object;
  @Input() liked:boolean;

  constructor() { }
}
