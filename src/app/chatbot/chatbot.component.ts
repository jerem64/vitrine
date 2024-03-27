import { Component, Renderer2, ElementRef, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../shared.service';

interface ChatMessage {
  text: string;
  isUserMessage: boolean;
}

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements AfterViewInit, OnInit {
  @ViewChild('chatbotMessagesContainer', { static: false }) chatbotMessagesContainer!: ElementRef;
  @ViewChild('chatbotInput', { static: false }) chatbotInput!: ElementRef;


  userInput: string = '';
  chatMessages: ChatMessage[] = [];
  isVisible: boolean = false;
  isWiggling: boolean = true; // New property for button animation
  isThinking: boolean = false;
  placeHolder: string = 'Your message...'

  constructor(private renderer: Renderer2, private http: HttpClient, private sharedService: SharedService) {
    this.sharedService.chatbotEvent.subscribe(() => {
      this.openChatbot();
    });
  }

  ngOnInit() {
    // Call this method when you need to scroll down the chatbot container
    //this.scrollChatbotContainerToBottom();
  }

  ngAfterViewInit() {
  } 

  openChatbot() {
    this.isVisible = true;
    this.isWiggling = false;

    setTimeout(() => {
      if (this.isVisible)
      {
        this.chatbotInput.nativeElement.focus();
      }
    }, 10);
  }


  toggle() {
    this.isVisible = !this.isVisible;
    this.isWiggling = false;

    setTimeout(() => {
      if (this.isVisible)
      {
        this.chatbotInput.nativeElement.focus();
      }
    }, 5);
  }

  sendMessage() {
    const debug = false;
    const userMessage = this.userInput;

    if(this.userInput!="")
    {
      this.isThinking = true;
      this.placeHolder = "Andrew is thinking...";
      this.chatMessages.push({ text: userMessage, isUserMessage: true });
      setTimeout(() => {
        this.scrollChatbotContainerToBottom();
      }, 10);

      const apiUrl = 'https://apiflaskopenaicv-fhwxqvaupa-ew.a.run.app/ask_question';
      const payload = { input: userMessage };

      if(debug)
      {
        setTimeout(() => {
          this.chatMessages.push({ text: "réponse du bot à : " + userMessage , isUserMessage: false });
          this.isThinking = false;
          this.placeHolder = "Your message...";

          setTimeout(() => {
            this.chatbotInput.nativeElement.focus();
            this.scrollChatbotContainerToBottom();
          }, 10);
        }, 1500);
      }
      else
      {
        this.http.post(apiUrl, payload).subscribe(response => {
          const apiResponse = response as { output: string };
          const botResponse = apiResponse.output;

          this.chatMessages.push({ text: botResponse, isUserMessage: false });
          this.isThinking = false;
          this.placeHolder = "Your message...";

          setTimeout(() => {
            this.chatbotInput.nativeElement.focus();
            this.scrollChatbotContainerToBottom();
          }, 10);
        });
      }

      // Supprime les anciens messages pour conserver uniquement les 8 derniers
      if (this.chatMessages.length > 20) {
        this.chatMessages.splice(0, 2);
      }

      // Réinitialise la valeur de la textbox
      this.userInput = '';
      this.chatbotInput.nativeElement.focus();
    }
  }

  scrollChatbotContainerToBottom() {
    const container = this.chatbotMessagesContainer.nativeElement;
    container.scrollTop = container.scrollHeight;
  }
}