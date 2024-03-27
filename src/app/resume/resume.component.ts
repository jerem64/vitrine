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
    this.calculateEmploymentDuration();
  }

  cvPdfUrl = '/assets/Resume_Jeremy_Chassin.pdf';
  masterMLEPdfUrl = '/assets/Diploma_Master_MLE_Jeremy_Chassin.pdf';
  masterIBEPdfUrl = '/assets/Diploma_Master_IBE_Jeremy_Chassin.pdf';
  BEngIGPdfUrl = '/assets/Diploma_BTS_IG_Jeremy_Chassin.pdf';

  startDate = new Date(2024, 1, 5); // Set the start date for your employment (February 5th, 2016)
  duration: string = '';

  calculateEmploymentDuration(): void {
    const currentDate = new Date();
    const diffInMilliseconds = currentDate.getTime() - this.startDate.getTime();
  
    const years = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24 * 365));
    const months = Math.ceil((diffInMilliseconds % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
  
    if (years > 0) {
      this.duration = `${years} Yrs ${months} Mos`;
    } else {
      this.duration = `${months} Mos`;
    }
  }  
}
