import { JiveService, Discussion, Content } from './../../services/jive.service';
import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'news-details-Page',
  templateUrl: 'news-details.html',
  providers: [JiveService]
})

export class NewsDetailsPage {
  discussion: Discussion;
  commentForm: FormGroup;
  constructor(private navParams: NavParams) {
    this.discussion = this.navParams.get('discussion');
    this.commentForm = new FormGroup( {
      'message': new FormControl( '', [ Validators.required, Validators.minLength(2) ] )
    });
  }

  loadData() {
//    this.jiveService.getDiscussions()
//      .subscribe(result => {
//        this.discussions = result;
//        console.log('# Discussions read' + result.toString());
//      })
  }
  sendMessage(){}
  ionViewDidLoad() {
    this.discussion.hasRead =true;
  }
}
