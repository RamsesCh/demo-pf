import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StepService {

  actualStep: string;
  private actualStepSubject = new Subject<string>();
  actualStepObservable = this.actualStepSubject.asObservable();
  

  constructor() { }

  setStep(valor: string) {
    this.actualStep = valor;
    this.actualStepSubject.next(valor);
  }
}
