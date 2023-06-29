import { Component, Renderer2, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface ChatMessage {
  text: string;
  isUserMessage: boolean;
}

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements AfterViewInit {
  @ViewChild('chatbotMessagesContainer', { static: false }) chatbotMessagesContainer!: ElementRef;

  userInput: string = '';
  chatMessages: ChatMessage[] = [];
  isVisible: boolean = false;

  constructor(private renderer: Renderer2, private http: HttpClient) {}

  ngAfterViewInit() {
  } 

  toogle() {
    this.isVisible = !this.isVisible;
  }

  sendMessage() {    
    const debug = false;
    const userMessage = this.userInput;

    if(this.userInput!="")
    {
      this.chatMessages.unshift({ text: userMessage, isUserMessage: true });
      
      const apiUrl = 'https://apiflaskopenaicv-fhwxqvaupa-ew.a.run.app/ask_question';
      const payload = { input: userMessage };
      
      if(debug)
      {
        this.chatMessages.unshift({ text: "réponse du bot" + userMessage , isUserMessage: false });
      }
      else
      {
        this.http.post(apiUrl, payload).subscribe(response => {
          const apiResponse = response as { output: string };
          const botResponse = apiResponse.output;

          this.chatMessages.unshift({ text: botResponse, isUserMessage: false });
        });
      }

      // Supprime les anciens messages pour conserver uniquement les 8 derniers
      if (this.chatMessages.length > 10) {
        this.chatMessages.splice(0 - 2);
      }

      // Réinitialise la valeur de la textbox
      this.userInput = '';
    }
  }
}
