import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StepService } from '../../services/step.service';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  public key: any;
  public step: any;

  constructor(
    private router: Router,
    private ActivatedRoute: ActivatedRoute,
    private stepService: StepService,
  ) {
    this.stepService.actualStepObservable.subscribe(response => {
      this.step = response;
    });
   }

  ngOnInit(): void {
    this.step = 'login';
    if (this.ActivatedRoute.snapshot.queryParams) {
      this.key = this.ActivatedRoute.snapshot.params['k'];
    }
  }

}
