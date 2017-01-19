import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

/*
 Generated class for the Chat page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})

export class ChatPage {

  m = {
      author: 'Finn',
      incoming: 0
  };

  messages = [{
    author: 'Finn',
    content: 'Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen Sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans. Ein kleines Bächlein namens Duden fließt durch ihren Ort und versorgt sie mit den nötigen Regelialien.',
    incoming: 0,
    createdAt: new Date()
  },
    {
      author: 'Bernd',
      content: 'Es ist ein paradiesmatisches Land, in dem einem gebratene Satzteile in den Mund fliegen.',
      incoming: 1,
      createdAt: new Date()
    }];

  constructor(public navCtrl: NavController) {
  }

  sendMessage(message){
    let completeMessage = Object.assign({createdAt: new Date()}, message);
    message.content = "";
    
    this.messages.push(completeMessage);
  }

  ionViewDidLoad() {
    console.log('Hello ChatPage Page');
  }

}
