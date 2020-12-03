import { Component, OnInit } from '@angular/core';
import { StepService } from '../../services/step.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public step: any; 
  constructor(
    private stepService: StepService
    ) { 
    this.stepService.actualStepObservable.subscribe(response => {
      this.step = response;
    });
  }

  ngOnInit(): void {
    this.step = 'login';
  }

}
