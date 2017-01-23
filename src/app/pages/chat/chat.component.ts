import {Inject} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Http, Headers} from '@angular/http';
import {Component, OnInit, OnDestroy} from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ChatService} from '../../services/chat.service'

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
  providers: [ChatService]
})
export class ChatPage implements OnInit, OnDestroy {
  chatForm: FormGroup;
  messages = [];
  connection;
  status;

  constructor(private _fb: FormBuilder, private _cs: ChatService) {
  }
  
  sendMessage() {
    if(this.chatForm.valid) {
      this._cs.sendMessage(this.chatForm.value.message);
      this.chatForm.reset();
    }
  }

  ngOnInit() {
    this.connection = this._cs.getMessages().subscribe(message => {
      this.messages.unshift(message);
      this.status = true;
    });

    this._cs.checkStatus().then(status => {
      this.status = status;
    }, error => {
      this.status = error;
    });

    this.chatForm = new FormGroup( {
      'message': new FormControl( '', [ Validators.required, Validators.minLength(2) ] )
    });
  } // ngOnInit()

  ngOnDestroy() {
    this.connection.unsubscribe();
  }
}