import { Component, Input } from "@angular/core";
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'like-button',
  templateUrl: 'likebutton.html'
})

export class LikeButton {
  @Input() content: any = null;

  constructor(private toastCtrl: ToastController) { }

  onLikeClicked(data) {
    data.liked = !data.liked;

    let toast = this.toastCtrl.create({
      message: data.liked ? "Liked..." : "Disliked...",
      duration: 1000,
      position: "middle"
    });
    toast.present();
  }
}
