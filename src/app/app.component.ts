import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Jérémy Chassin';

  selectedItem: string = 'projects';

  loadContent(item: string) {
    this.selectedItem = item;
  }
}
