import { Component, OnInit } from '@angular/core';
import { ChatServiceService } from './chat-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'chat-research';
  message = '';
  messagesTo778: string[] = [];
  messagesTo777: string[] = [];
  constructor(private chatService: ChatServiceService) {

  }

  public ngOnInit(): void {
    this.chatService
      .getMessages778()
      .subscribe((message: string) => {
        this.messagesTo778.push(message);
      });
    this.chatService
      .getMessages777()
      .subscribe((message: string) => {
        this.messagesTo777.push(message);
      });
  }

  sendMessage778() {
    this.chatService.sendMessage778(this.message);
    this.message = '';
  }
  sendMessage777() {
    this.chatService.sendMessage777(this.message);
    this.message = '';
  }

}
