import { Component, Input } from "@angular/core";
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'like-button',
  templateUrl: 'likebutton.html'
})
/**
* LikeButton displays a like-icon that can be clicked.
* The related uuid is then stored in (or removed from) the list of liked articles.
*/
export class LikeButton {
  /**
  * The uuid of the article that can be dis/liked.
  */
  @Input() uuid:string;
  /**
  * Represents the status of the LikeButton.
  */
  @Input() isLiked:boolean;

  /**
  * Constructor for StorageService.
  *
  * @param storageService StorageService used to store key value pairs.
  */
  constructor(private storageService: StorageService) {
  }

  /**
  * Dis/likes depending on the current state.
  */
  onLikeClicked(uuid:string) {
    this.isLiked ? this.dislike(uuid) : this.like(uuid);
  }

  /**
  * Adds the uuid to the list of liked articles and marks the icon as liked.
  */
  like(uuid:string){
    this.storageService.addLikedArticle(uuid);
    this.isLiked = true;
  }

  /**
  * Removes the uuid from the list of liked articles and marks the icon as not liked.
  */
  dislike(uuid:string){
    this.storageService.removeLikedArticle(uuid);
    this.isLiked = false;
  }
}
