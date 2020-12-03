import { Component, OnInit } from '@angular/core';
import { StepService } from '../../services/step.service';

@Component({
  selector: 'app-privacy-notice',
  templateUrl: './privacy-notice.component.html',
  styleUrls: ['./privacy-notice.component.scss']
})
export class PrivacyNoticeComponent implements OnInit {

  constructor(
    private stepService: StepService,
  ) { }

  ngOnInit(): void {
  }

  continue() {
    this.stepService.setStep('indications-scanner');
  }

}
