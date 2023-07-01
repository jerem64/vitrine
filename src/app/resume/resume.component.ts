import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  constructor(private sharedService: SharedService) {}

  openChatbot(): void {
    this.sharedService.openChatbot();
  }

  ngOnInit(): void {
  }

}
