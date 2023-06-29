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

  isChatbotCollapsed = false;
  userInput: string = '';
  chatMessages: ChatMessage[] = [];

  constructor(private renderer: Renderer2, private http: HttpClient) {}

  ngAfterViewInit() {
  } 


  sendMessage() {
    const debug = true;
    const userMessage = this.userInput;

    // Ajouter le message de l'utilisateur à la liste des messages
    this.chatMessages.unshift({ text: userMessage, isUserMessage: true });

    // Appeler l'API avec le message de l'utilisateur
    const apiUrl = 'https://apiflaskopenaicv-fhwxqvaupa-ew.a.run.app/ask_question';
    //const apiUrl = 'http://127.0.0.1:5000/ask_question';
    const payload = { input: userMessage };

    if(debug)
    {
      this.chatMessages.unshift({ text: "réponse du bot" + userMessage , isUserMessage: false });
    }
    else
    {
      this.http.post(apiUrl, payload).subscribe(response => {
        // Traiter la réponse de l'API et l'ajouter à la liste des messages
        const apiResponse = response as { output: string };
        const botResponse = apiResponse.output;

        this.chatMessages.unshift({ text: botResponse, isUserMessage: false });
      });
    }

  // Supprimer les anciens messages pour conserver uniquement les 5 derniers
  if (this.chatMessages.length > 16) {
    this.chatMessages.splice(0 - 2);
  }

    // Réinitialiser la valeur de la textbox
    this.userInput = '';
  }

  isMessageOld(index: number): boolean {
    // Logic to determine if the message at the given index is considered old
    // Return true if the message is old, false otherwise
    // You can implement your own logic based on your requirements
    // For example, you can define a threshold index where messages beyond that index are considered old
    const oldMessageThreshold = 3;
    return index >= oldMessageThreshold;
  }
}
