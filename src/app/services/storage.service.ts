import { Injectable, Inject } from "@angular/core";
import { Storage } from '@ionic/storage';

@Injectable()
export class StorageService {
  public static TUTORIAL_SHOWN:string = "tutorial_shown";
  public static USER:string = "user";
  public static USERSETTINGS:string = "usersettings";

  constructor(private storage: Storage) {

  }

  get(key) {
    return this.storage.get(key);
  }

  set(key, value){
    this.storage.set(key, value);
  }

  remove(key){
    this.storage.remove(key);
  }

  clear(){
    this.storage.clear();
  }
}
