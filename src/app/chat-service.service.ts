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

  public sendMessage778(message: string) {
    this.socket.emit('new-message-778', message);
  }

  public sendMessage777(message: string) {
    this.socket.emit('new-message-777', message);
  }

  public getMessages778() {
    return new Observable((observer) => {
      this.socket.on('new-message-778', (message: string) => {
        observer.next(message);
        console.log('LLEGO778');
      });
    });
  }

  public getMessages777() {
    return new Observable((observer) => {
      this.socket.on('new-message-777', (message: string) => {
        observer.next(message);
        console.log('LLEGO777');
      });
    });
  }
}
