import { Component, OnInit } from '@angular/core';
import { StepService } from '../../services/step.service';

@Component({
  selector: 'app-preview-dni',
  templateUrl: './preview-dni.component.html',
  styleUrls: ['./preview-dni.component.scss']
})
export class PreviewDni implements OnInit {

  public scanComplete: boolean;

  constructor(
    private stepService: StepService
  ) { }

  ngOnInit(): void {
    this.scanComplete = false;
  }

  newCapture(val: string) {
    console.log(val);
  }

  scannSuccess() {
    console.log('next');
    this.scanComplete = true;
  }

  nextStep() {
    this.stepService.setStep('terms-indications');
  }

}
