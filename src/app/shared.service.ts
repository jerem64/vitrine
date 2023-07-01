import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  chatbotEvent: EventEmitter<void> = new EventEmitter<void>();

  openChatbot(): void {
    this.chatbotEvent.emit();
  }
}
