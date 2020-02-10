import { Component, OnInit } from '@angular/core';
import { ChatServiceService, Message } from './chat-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  messageOperatorTo778 = '';
  messageOperatorTo777 = '';
  message778ToOperator = '';
  message777ToOperator = '';
  messagesTo778: Message[] = [];
  messagesTo777: Message[] = [];
  messagesToOperator: Message[] = [];
  constructor(private chatService: ChatServiceService) {

  }

  public ngOnInit(): void {
    this.chatService
      .getMessages()
      .subscribe((message: Message) => {
        if (message.receptor === '778') {
          this.messagesTo778.push(message);
        } else if (message.receptor === '777') {
          this.messagesTo777.push(message);
        } else if (message.receptor === 'Operator') {
          this.messagesToOperator.push(message);
        }
      });
  }

  public sendMessage(emisor: string, receptor: string, message: string) {
    const newMessage: Message = {
      emisor,
      receptor,
      message
    };

    this.chatService.sendMessage(newMessage);
    // this.message = '';
  }
}
