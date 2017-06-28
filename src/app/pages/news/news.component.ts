import { JiveService, Discussion, Content } from './../../services/jive.service';
import {Component} from '@angular/core';
import {NavController} from "ionic-angular";
import {NewsDetailsPage} from "./../news-details/news-details.component";

@Component({
  selector: 'news-Page',
  templateUrl: 'news.html',
  providers: [JiveService]
})

export class NewsPage {
discussions: Discussion[] = [];
discussionsVIP: Discussion[] = [];
discussionsFiltered: Discussion[] = [];
newsFilter:string = 'a';
  constructor(private jiveService: JiveService, private nav: NavController) {
  }

  loadData() {
  }
  
  showDetails(discussion: Discussion) {
      this.nav.push(NewsDetailsPage,{'discussion': discussion});
  }

  ionViewDidLoad() {
      this.jiveService.getDiscussions().subscribe(x => {
        console.log(x);
        x.forEach(d => this.discussions.push(d));
        this.updateFilter();
      });
      this.discussionsVIP.push(new Discussion(205, new Date(), 83,2,"Neue Struktur", new Content("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."), null, null,false,false,false,'assets/img/schmall.jpg',['assets/img/elektrowagen.jpg','assets/img/emotor.jpg'],[],false));
      this.updateFilter();
  }


  updateFilter() {
    switch (this.newsFilter) {
      case 'a':
        this.discussionsFiltered = this.discussions.filter(x=>x.isDeleted===false);    
        break;
      case 'f':
        this.discussionsFiltered = this.discussions.filter(x=>x.isFavorite===true && x.isDeleted===false); 
        break;
      case 'g':
        this.discussionsFiltered = this.discussions.filter(x=>x.hasRead===true && x.isDeleted===false);
        break;
      default:
        break;
    }
  }
  setFavorite(discussion: Discussion){
    discussion.isFavorite = true;
    this.updateFilter();
  }
  deleteDiscussion(discussion: Discussion){
    discussion.isDeleted = true;
    this.updateFilter();
  }
}


