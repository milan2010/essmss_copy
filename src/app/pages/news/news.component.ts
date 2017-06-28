import { JiveService, Discussion, Content } from './../../services/jive.service';
import {Component} from '@angular/core';
import {NavController} from "ionic-angular";
import { NavParams } from 'ionic-angular'
import {NewsDetailsPage} from "./../news-details/news-details.component";

@Component({
  selector: 'news-Page',
  templateUrl: 'news.html',
  providers: [JiveService]
})

export class NewsPage {
discussions: Discussion[] = [];
discussionsFiltered: Discussion[] = [];
newsFilter:string = 'a';
  constructor(private jiveService: JiveService, private nav: NavController) {

  }

  loadData() {
//    this.jiveService.getDiscussions()
//      .subscribe(result => {
//        this.discussions = result;
//        console.log('# Discussions read' + result.toString());
//      })
  }
  showDetails(discussion: Discussion) {
      this.nav.push(NewsDetailsPage,{'discussion': discussion});
  }

  ionViewDidLoad() {
      this.discussions.push(new Discussion(205, new Date(), 3,4,"Der neue E-Motor.", new Content("Diese hier ist der Content"), null, null,false,false,false,'assets/img/ClaudiaKleber.jpg',
      ['assets/img/HerbertMeiser.jpg', 'assets/img/OlafMueller.jpg', 'assets/img/SylviaGerber.jpg']));
      this.discussions.push(new Discussion(205, new Date(), 23,1,"Der neue Artheon ist da.", new Content("Diese hier ist der Content"), null, null,false,false,false,'assets/img/OlafMueller.jpg',[]));
      this.discussions.push(new Discussion(205, new Date(), 83,2,"Batterienforschung Hautnah.", new Content("Diese hier ist der Content"), null, null,false,false,false,'assets/img/SylviaGerber.jpg',[]));
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
