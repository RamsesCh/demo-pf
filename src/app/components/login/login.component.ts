import { Component, OnInit, ElementRef } from '@angular/core';
import { StepService } from '../../services/step.service';
import { CountriesService } from '../../services/countries.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import * as moment from 'moment';
import 'moment/locale/es';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public countries = this.countriesService.getcountries();
  public countr = this.countries[3];
  public img = this.countries[3].src;
  public data: FormGroup;
  public birthdate = '';
  public maxDate = new Date(Date.now());
  public phone: string;

  constructor(
    private stepService: StepService,
    private countriesService: CountriesService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  nextStep() {
    this.stepService.setStep('privacy');
  }

  imgChange(c) {
    this.img = c.value.src;
  }

  createForm() {
    this.data = this.fb.group({
      birthdate: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      phone: ['', Validators.compose([Validators.required, Validators.minLength(10)])],
      country: ['', Validators.compose([Validators.required])],
    });
  }

  submitSolicitud() {
    this.nextStep();
  }

  dateChange(event, inputFecha: ElementRef) {
    this.data
      .get('birthdate')
      .patchValue(moment(new Date(event.value)).format('DD/MM/YYYY'));
    this.birthdate = moment(new Date(event.value))
      .format('DD/MM/YYYY')
      .toString();
  }

  validar() {
    this.data
      .get('birthdate')
      .setValidators([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
      ]);
    this.data
      .get('phone')
      .setValidators([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
      ]);
    this.data.get('birthdate').updateValueAndValidity();
    this.data.get('phone').updateValueAndValidity();
  }

}
