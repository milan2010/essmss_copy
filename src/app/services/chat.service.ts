import {Observable} from 'rxjs/Observable';
import * as io from 'socket.io-client';

export class ChatService {
  private url = 'http://localhost:9000';
  private socket;

  sendMessage(message) {
    this.socket.emit('outgoing', message);
  }

  getMessages() {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('message', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }

  checkStatus() {
    return new Promise((resolve, reject) => {
      this.socket.on('connect', () => {
        resolve(true);
      });
      this.socket.on('connect_error', () => {
        reject(false);
      });
      this.socket.on('error', () => {
        reject(false);
      });
    });
  }
}
