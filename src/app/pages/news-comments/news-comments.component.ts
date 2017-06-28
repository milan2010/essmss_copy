import { Discussion, JiveService } from './../../services/jive.service';
import {Component} from '@angular/core';
import {NavController,ViewController} from "ionic-angular";
import { NavParams } from 'ionic-angular'


@Component({
  selector: 'news-comments-Page',
  templateUrl: 'news-comments.html',
  providers: [JiveService]
})

export class NewsCommentsPage {
  comments: string[] = [];
  textValue: string = "";
  selectedDate = new Date();

  constructor(private nav: NavController, private viewCtrl: ViewController,
  private navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.comments.push("Dieses ist ein Kommentar - 1");
    this.comments.push("Dieses ist ein Kommentar - 2");
    this.comments.push("Dieses ist ein Kommentar - 3");
  }
  postComment() {
    this.comments.push(this.textValue);
  }
  closeComments() {
    this.viewCtrl.dismiss();
  }
}
