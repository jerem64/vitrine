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

  cvPdfUrl = '/assets/Resume_Jeremy_Chassin.pdf';
  masterMLEPdfUrl = '/assets/Diploma_Master_MLE_Jeremy_Chassin.pdf';
  masterIBEPdfUrl = '/assets/Diploma_Master_IBE_Jeremy_Chassin.pdf';
  BEngIGPdfUrl = '/assets/Diploma_BTS_IG_Jeremy_Chassin.pdf';  
}
