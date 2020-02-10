import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {
  private url = 'http://localhost:3000';
  private socket;

  constructor() {
    this.socket = io(this.url);
  }

  public sendMessage(message: Message) {
    this.socket.emit('new-message', message);
  }

  public getMessages() {
    return new Observable((observer) => {
      this.socket.on('new-message', (message: Message) => {
        observer.next(message);
      });
    });
  }
}


export interface Message {
  emisor: string;
  receptor: string;
  message: string;
}
