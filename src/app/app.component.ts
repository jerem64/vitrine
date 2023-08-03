import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  selectedItem: string;

  constructor(private router: Router, private sharedService: SharedService) {
    this.selectedItem = 'home';
  }

  openChatbot(): void {
    this.sharedService.openChatbot();
  }

  ngOnInit(): void {
  }
  title = 'Jérémy Chassin';
  cvPdfUrl = '/assets/Resume_Jeremy_Chassin.pdf';

  navigateTo(item: string) {
    this.selectedItem = item;
    if(item=='home')
      item='';
    this.router.navigate([item]);
  }
}