import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css']
})

export class ChatBotComponent implements OnInit {
  isChatExpanded = false;

  ngOnInit() {
    this.isChatExpanded = false;
  }

  toggleChat() {
    this.isChatExpanded = !this.isChatExpanded;
  }
}