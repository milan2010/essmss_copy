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
      this.discussions.push(new Discussion(205, new Date(), 23,1,"Standortsymposium in BS", new Content("Der Zukunftspakt gibt den Fahrplan für den Umbau des Autobauers VW vor. Was sich durch die Vereinbarung im Werk Braunschweig verändert, welche Probleme bewältigt werden müssen und welche Chancen sich ergeben, erläutern Werkleiter Otto Joos und Betriebsratschef Uwe Fritsch im Interview mit Armin Maus und Andreas Schweiger."), null, null,false,false,false,'assets/img/bv_BS.jpeg',['assets/img/bv_BS.jpeg'],[],true));
      this.discussions.push(new Discussion(205, new Date(), 83,2,"Halle 31 in TPM Stufe 3", new Content("In der Lenkungsmontage der Halle 31 sind die Bereiche MQB (Modularer Quer Baukasten) und RC-EPS (rack concentric electric power steering) nun komplett in der TPM-Stufe 3."), null, null,false,false,false,'assets/img/tpm.jpg',['assets/img/tpm.jpg'],[],true));
      this.discussions.push(new Discussion(205, new Date(), 3,4,"Der neue E-Motor", 
      new Content("Die Produktion des neuen Elektromotors startet in der Komponente."), null, null,false,false,false,'assets/img/emotor.jpg',
      ['assets/img/emotor.jpg', 'assets/img/elektrowagen.jpg'],['Testkommentar','Testkommentar2'],true));
      this.discussionsVIP.push(new Discussion(205, new Date(), 83,2,"Neue Struktur", new Content("Thomas Schmall, bisher Präsident und CEO von Volkswagen do Brasil, wird mit Wirkung zum 1. Januar 2015 Mitglied des Markenvorstands Volkswagen für den Geschäftsbereich Komponente. "), null, null,false,false,false,'assets/img/schmall.jpg',['assets/img/vw.jpg','assets/img/elektrowagen.jpg'],[],false));
      this.updateFilter();
  }


  updateFilter() {
    this.discussionsVIP = this.discussionsVIP.filter(x=>x.isDeleted === false);
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