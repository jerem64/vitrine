import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit, ViewChild, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit, AfterViewInit {
  @Input() project: any;
  @Output() openUrl = new EventEmitter<string>();
  @ViewChild('projectImage', { static: false })
  projectImage!: ElementRef;

  constructor() { }
  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.adjustImageHeight();
  }
  
  adjustImageHeight() {
    const element = this.projectImage.nativeElement;
    const image = new Image();
    image.src = element.style.backgroundImage.replace(/url\(['"]?(.*?)['"]?\)/i, '$1');

    image.onload = () => {
      const aspectRatio = image.width / image.height;
      const containerWidth = element.offsetWidth;
      const calculatedHeight = containerWidth / aspectRatio;
      element.style.height = `${calculatedHeight}px`;
    };
  }
}
