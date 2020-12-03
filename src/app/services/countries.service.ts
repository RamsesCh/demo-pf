import { Injectable } from '@angular/core';

export interface country {
  viewValue: string;
  src: string;
}

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  public countries: country[];
  constructor() { }
  getcountries() {
    return  this.countries = [
      {
        viewValue: "+521",
        src: "assets/img/country/+52.png"
      },
      {
        viewValue: "+1",
        src: "assets/img/country/+1.png"
      },
      {
        viewValue: "+57",
        src: "assets/img/country/+57.png"
      },
      {
        viewValue: "+54",
        src: "assets/img/country/+54.png"
      },
      {
        viewValue: "+56",
        src: "assets/img/country/+56.png"
      },
      {
        viewValue: "+506",
        src: "assets/img/country/+506.png"
      },
      {
        viewValue: "+53",
        src: "assets/img/country/+53.png"
      },
      {
        viewValue: "+507",
        src: "assets/img/country/+507.png"
      },
      {
        viewValue: "+34",
        src: "assets/img/country/+34.png"
      },
      {
        viewValue: "+502",
        src: "assets/img/country/+502.png"
      },
      {
        viewValue: "+503",
        src: "assets/img/country/+503.png"
      },
      {
        viewValue: "+504",
        src: "assets/img/country/+504.png"
      },
      {
        viewValue: "+41",
        src: "assets/img/country/+41.png"
      },
      {
        viewValue: "+45",
        src: "assets/img/country/+45.png"
      },
      {
        viewValue: "+33",
        src: "assets/img/country/+33.png"
      },
      {
        viewValue: "+39",
        src: "assets/img/country/+39.png"
      },
      {
        viewValue: "+58",
        src: "assets/img/country/+58.png"
      },
      {
        viewValue: "+86",
        src: "assets/img/country/+86.png"
      }
    ]
  }
}
