import {Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Keyboard } from 'ionic-native';
import { Content, TextInput } from 'ionic-angular';
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
  footerElement: any;

  @ViewChild(Content) content: Content;
  @ViewChild('chat_input') messageInput: TextInput;
  constructor(private _fb: FormBuilder, private _cs: ChatService, private elementRef: ElementRef) {

    Keyboard.onKeyboardShow()
    .subscribe(data => {
      this.onKeyboardShow(data);
    });

    Keyboard.onKeyboardHide()
    .subscribe(data => {
      this.onKeyboardHide(data);
    });
  }

  sendMessage() {
    if(this.chatForm.valid) {
      this._cs.sendMessage(this.chatForm.value.message);
      this.chatForm.reset();

      this.messageInput.setFocus();
    }
  }

  ngOnInit() {
    this.connection = this._cs.getMessages().subscribe(message => {
      this.messages.push(message);
      this.status = true;

      setTimeout(() => {
        this.updateScroll();
      }, 400);
    });

    this._cs.checkStatus().then(status => {
      this.status = status;
    }, error => {
      this.status = error;
    });

    this.chatForm = new FormGroup( {
      'message': new FormControl( '', [ Validators.required, Validators.minLength(2) ] )
    });

    this.footerElement = document.querySelector(".footer");
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

  /**
  * Scrolls the content to the bottom.
  */
  private updateScroll() {
    this.content.scrollToBottom();
  }

  /**
  * Repositions the footer above the keyboard (input with button) when the keyboard is shown.
  */
  private onKeyboardShow(data: any){
    let keyboardHeight: number = data.keyboardHeight || (data.detail && data.detail.keyboardHeight);
    let tabbarHeight: number = this.footerElement.style.bottom.slice(0, -2);
    this.setFooterPosition(keyboardHeight - tabbarHeight);
  }

  /*
  * Positions the footer to its former position (above tabbar) when the keyboard is hidden.
  */
  private onKeyboardHide(data){
    this.setFooterPosition(0);
  }

  /*
  * Sets the position of the footer and fits the content.
  */
  private setFooterPosition(pixels: number){
    this.footerElement.style.paddingBottom = pixels + "px";
    this.content.resize();
    this.updateScroll();
  }

}
