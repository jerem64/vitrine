import { Component } from '@angular/core';
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
export class ChatbotComponent {
  isChatbotCollapsed = false;
  userInput: string = '';
  chatMessages: ChatMessage[] = [];

  constructor(private http: HttpClient) {}

  sendMessage() {
    const debug = true;
    const userMessage = this.userInput;

    // Ajouter le message de l'utilisateur à la liste des messages
    this.chatMessages.push({ text: userMessage, isUserMessage: true });

    // Appeler l'API avec le message de l'utilisateur
    const apiUrl = 'https://apiflaskopenaicv-fhwxqvaupa-ew.a.run.app/ask_question';
    //const apiUrl = 'http://127.0.0.1:5000/ask_question';
    const payload = { input: userMessage };

    if(debug)
    {
      this.chatMessages.push({ text: "réponse du bot", isUserMessage: false });
    }
    else
    {
      this.http.post(apiUrl, payload).subscribe(response => {
        // Traiter la réponse de l'API et l'ajouter à la liste des messages
        const apiResponse = response as { output: string };
        const botResponse = apiResponse.output;

        this.chatMessages.push({ text: botResponse, isUserMessage: false });
      });
    }

    // Réinitialiser la valeur de la textbox
    this.userInput = '';
  }
}
