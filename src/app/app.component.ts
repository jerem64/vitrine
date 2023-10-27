import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  selectedItem: string = 'home';
  menu = false;
  title = 'Jérémy Chassin';
  cvPdfUrl = '/assets/Resume_Jeremy_Chassin.pdf';

  constructor(private router: Router, private sharedService: SharedService) { }

  openChatbot(): void {
    this.sharedService.openChatbot();
  }

  openCloseMenu(opened= this.menu): void {
    if (opened){
      this.menu = false;
    }
    else{
      this.menu = true;
    }
  }

  navigateTo(item: string) {
    this.openCloseMenu(true);
    this.selectedItem = item;
    this.router.navigate([item]);
  }
  
  ngOnInit() {
    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      const navigationEndEvent = event as NavigationEnd;
      // Split the URL and get the last segment
      const segments = navigationEndEvent.url.split('/');
      const desiredSegment = segments[segments.length - 1];
      
      if (desiredSegment) {
        this.navigateTo(desiredSegment);
      }
    });
  }  
}