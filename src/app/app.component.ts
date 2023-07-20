import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private sharedService: SharedService) {}

  openChatbot(): void {
    this.sharedService.openChatbot();
  }

  ngOnInit(): void {
  }
  title = 'Jérémy Chassin';

  selectedItem: string = 'home';

  loadContent(item: string) {
    this.selectedItem = item;
  }
}