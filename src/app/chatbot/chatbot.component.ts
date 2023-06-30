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
  @ViewChild('chatbotInput', { static: false }) chatbotInput!: ElementRef;


  userInput: string = '';
  chatMessages: ChatMessage[] = [];
  isVisible: boolean = false;

  constructor(private renderer: Renderer2, private http: HttpClient) {}

  ngAfterViewInit() {
  } 

  toggle() {
    this.isVisible = !this.isVisible;
    setTimeout(() => {
      this.chatbotInput.nativeElement.focus();
    }, 5);
  }

  sendMessage() {    
    const debug = true;
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
      if (this.chatMessages.length > 20) {
        this.chatMessages.splice(0 - 2);
      }

      // Réinitialise la valeur de la textbox
      this.userInput = '';
      this.chatbotInput.nativeElement.focus();
    }
  }
}
