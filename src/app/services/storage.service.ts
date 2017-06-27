import { Injectable } from "@angular/core";
import { Storage } from '@ionic/storage';

@Injectable()
/**
* StorageService handles the permanent storage of key vlaue pairs.
*/
export class StorageService {
  /**
  * Key name for tutorial shown.
  */
  public static TUTORIAL_SHOWN:string = "tutorial_shown";
  /**
  * Key name for user.
  */
  public static USER:string = "user";
  /**
  * Key name for usersettings.
  */
  public static USERSETTINGS:string = "usersettings";
  /**
  * Key name for liked articles.
  */
  public static LIKED_ARTICLES:string = "liked_articles";
  /**
  * Key name for user credentials.
  */
  public static USER_CREDENTIALS:string = "user_credentials";
  /**
  * Array of uuids of liked articles.
  */
  private likedArticles:Array<string>;

  /**
  * Constructor for StorageService.
  *
  * @param storage Ionic Storage used as key value store..
  */
  constructor(private storage: Storage) {
    // get liked articles from storage or create empty array
    this.get(StorageService.LIKED_ARTICLES).then(data => {
      if (data !== null){
        this.likedArticles = data;
      } else {
        this.set(StorageService.LIKED_ARTICLES, []);
        this.likedArticles = [];
      }
    });
  }

  /**
  * Gets the value assocated with the given key.
  */
  get(key:string) {
    return this.storage.get(key);
  }

  /**
  * Sets the value for the given key.
  */
  set(key:string, value:any){
    return this.storage.set(key, value);
  }

  /**
  * Removes any value associated with this key.
  */
  remove(key:string){
    return this.storage.remove(key);
  }

  /**
  * Clears the entire key value store!
  */
  clear(){
    return this.storage.clear();
  }

  /**
  * Returns the list of uuids of the liked articles.
  */
  getLikedArticles():Array<string>{
    return this.likedArticles;
  }

  /**
  * Adds the uuid of an article to the list of liked articles.
  */
  addLikedArticle(uuid:string){
    if(!this.likedArticles.includes(uuid)){
      this.likedArticles.push(uuid);
      this.set(StorageService.LIKED_ARTICLES, this.likedArticles);
    }
  }

  /**
  * Removes the uuid of an article from the list of liked articles.
  */
  removeLikedArticle(uuid:string){
    if(this.likedArticles.includes(uuid)){
      this.likedArticles.splice(this.likedArticles.indexOf(uuid), 1);
      this.set(StorageService.LIKED_ARTICLES, this.likedArticles);
    }
  }
}
