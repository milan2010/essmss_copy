import { Observable } from 'rxjs/Observable';
import { JiveService, Discussion, Content } from './../../services/jive.service';
import {Component} from '@angular/core';
import {NavController} from "ionic-angular";
import {NewsDetailsPage} from "./../news-details/news-details.component";
import { ToastController, Platform, LoadingController } from 'ionic-angular';

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
hasPushed: boolean= false;
timer = Observable.timer(107000,100000);
  constructor(private jiveService: JiveService, private nav: NavController,
  public toastCtrl: ToastController, private platform: Platform, public loadingCtrl: LoadingController) {
  }

  loadData() {
  }
  
  showDetails(discussion: Discussion) {
      this.nav.push(NewsDetailsPage,{'discussion': discussion});
  }

  refresh(refresher) {
    console.log("Refresh triggered")
    let loading = this.loadingCtrl.create({
      content: 'Bitte warten...'
    });
    loading.present();
    this.discussions = [];
    this.jiveService.getDiscussions().subscribe(x => {
        x.forEach(d => this.discussions.push(d));
        this.updateFilter();
        loading.dismiss();
        if (refresher != null) {
          refresher.complete();
        }
      });
  }

  ionViewDidLoad() {
      this.refresh(null);
      this.discussionsVIP.push(new Discussion(205, new Date(), 83,2,"Neue Struktur", new Content("","Thomas Schmall, bisher Präsident und CEO von Volkswagen do Brasil, wird mit Wirkung zum 1. Januar 2015 Mitglied des Markenvorstands Volkswagen für den Geschäftsbereich Komponente. "), null, null,false,false,false,'assets/img/schmall.jpg',['assets/img/vw.jpg','assets/img/elektrowagen.jpg'],[],false, "8 hours"));
      this.updateFilter();

    this.timer.subscribe(t=> {
      if (!this.hasPushed) {
      let toast = this.toastCtrl.create({
      message: 'Neue News: Neue APP-Funktion für E-Tankstellen.',
      duration: 2000,
      position: 'top'
    });
    toast.present();
      this.discussionsVIP.push(new Discussion(205, new Date(), 0,0,"Neue APP-Funktion für E-Tankstellen", new Content("","Neue Ladensäulen Suchfuktion in der der APP verfügbar."), null, null,false,false,false,'assets/img/ladestation.jpg',['assets/img/ladestation.jpg'],[],false, "8 hours"));
      this.hasPushed=true;
      this.updateFilter();
      }
});
  }

setSound() {
    if (this.platform.is('android')) {
      return 'file://assets/sounds/shame.mp3'
    } else {
      return 'file://assets/sounds/bell.mp3'
    }
  }

  updateFilter() {
    switch (this.newsFilter) {
      case 'a':
        this.discussionsFiltered = this.discussions.filter(x=>x.isDeleted===false);    
        this.discussionsVIP = this.discussionsVIP.filter(x=>x.isDeleted === false);
        break;
      case 'f':
        this.discussionsFiltered = this.discussions.filter(x=>x.isFavorite===true && x.isDeleted===false); 
        this.discussionsVIP = this.discussionsVIP.filter(x=>x.isFavorite===true && x.isDeleted===false);
        break;
      case 'g':
        this.discussionsFiltered = this.discussions.filter(x=>x.hasRead===true && x.isDeleted===false);
        this.discussionsVIP = this.discussionsVIP.filter(x=>x.hasRead===true && x.isDeleted===false);
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