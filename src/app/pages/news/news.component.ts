import { JiveService, Discussion } from './../../services/jive.service';
import {Component} from '@angular/core';

@Component({
  selector: 'news-Page',
  templateUrl: 'news.html',
  providers: [JiveService]
})

export class NewsPage {
dicussions: Discussion[];

  constructor(private jiveService: JiveService) {
  }

  loadData() {
    this.jiveService.getDiscussions()
      .subscribe(result => {
        this.dicussions = result;
        console.log('# Discussions read' + result.toString());
      })
  }
}