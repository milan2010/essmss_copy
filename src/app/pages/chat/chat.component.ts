import {Inject} from '@angular/core';
import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Http, Headers} from '@angular/http';

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

  userId = 10815; // TODO: get ID from user object
  chatbotId = 99999;
  key = this.getKey();

  m = {
      author: 'Bernd',
      incoming: 1
  };

  messages = [
  {
    author: 'Bernd',
    content: 'Es ist ein paradiesmatisches Land, in dem einem gebratene Satzteile in den Mund fliegen.',
    incoming: 1,
    createdAt: new Date()
  },
  {
    author: 'Finn',
    content: 'Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen Sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans. Ein kleines Bächlein namens Duden fließt durch ihren Ort und versorgt sie mit den nötigen Regelialien.',
    incoming: 0,
    createdAt: new Date()
  }];

  constructor(public navCtrl: NavController, @Inject(Http) private http: Http) {
  }
  
  getKey() {
    let date = new Date();
    let today = date.getFullYear() + "-" + ('0' + (date.getMonth() + 1)).slice(-2) + "-" + ('0' + date.getDate()).slice(-2);
      
    return today + "-" + this.userId + "-" + this.chatbotId;
  }

  sendMessage(message){
    let newMessage = Object.assign({createdAt: new Date()}, message);
    message.content = "";
    
    this.messages.push(newMessage);
    
    // TODO: Add backend service and activate method saveMessage()
    // this.saveMessage(); 
  }

  ionViewDidLoad() {
    console.log('Hello ChatPage Page');
    
    // TODO: Add backend service and activate method readMessage()
    //this.readMessage(); 
  }
  
  // TODO: Adjust to http.post with body
  // TODO: Send only one message to the server not the whole message object
  saveMessage() {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      
      let messageJson = { message : this.messages };
      
      this.http.get('http://localhost:3000/messages/'+this.key+'/'+JSON.stringify(messageJson), {headers})
      .subscribe(res => {
          console.log(res);
      }, (err) => {
          console.log(err);
      });
  }
  
  readMessage() {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      
      this.http.get('http://localhost:3000/messages/'+this.key, {headers})
      .subscribe(res => {
          console.log(res);
          if(res.text().length > 0) {
              let messageJson = res.json();
              this.messages = messageJson.message;
          }
      }, (err) => {
          console.log(err);
      });
  }


}
