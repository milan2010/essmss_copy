import { JiveService, Discussion, Content } from './../../services/jive.service';
import { Component } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ActionSheetController } from 'ionic-angular';
import { ModalController, NavParams } from 'ionic-angular';
import {NewsCommentsPage} from "./../news-comments/news-comments.component";

@Component({
  selector: 'news-details-Page',
  templateUrl: 'news-details.html',
  providers: [JiveService]
})

export class NewsDetailsPage {
  discussion: Discussion;
  commentForm: FormGroup;

  constructor(private navParams: NavParams, 
  public actionSheetCtrl: ActionSheetController,
  public modalCtrl: ModalController) {
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
showComments() {
   let commentsModal = this.modalCtrl.create(NewsCommentsPage);
   commentsModal.present();
 }

  sendMessage() {}
  likeComment() {
    this.discussion.likeCount++;
  }
  shareContent() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Teile diese News',
      buttons: [
        {
          text: 'Teile mit Kontakten',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: 'Teile mit Gruppe',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
  ionViewDidLoad() {
    this.discussion.hasRead =true;
  }
}
