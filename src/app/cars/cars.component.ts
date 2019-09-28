import {Component} from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  // @ts-ignore
  cars: [{name: string , year: number}] = [{
    name: 'Ford',
    year: 2017
  }, {
      name: 'Mazda',
      year: 2015
  }, {
    name: 'Audi',
    year: 2010
  }, {
    name: 'Ford',
    year: 2017
  }];


  constructor() {
  }

  updateCarList(car: {name: string, year: number}) {
    this.cars.push(car);
  }
}
