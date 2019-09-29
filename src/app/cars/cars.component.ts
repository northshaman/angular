import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  // @ts-ignore
  cars: [{ name: string, year: number }] = [{
    name: 'Ford',
    year: 2017
    // }, {
    //     name: 'Mazda',
    //     year: 2015
    // }, {
    //   name: 'Audi',
    //   year: 2010
    // }, {
    //   name: 'Ford',
    //   year: 2017
  }];


  constructor() {
    console.log('contstrucor cars');
  }

  updateCarList(car: { name: string, year: number }) {
    this.cars.push(car);
  }

  changeCarName() {
    this.cars[0].name = 'New Car Name';
  }

  ngOnInit() {
    console.log('onInit');
  }

  deleteCar() {
    this.cars.splice(0, 1);
  }
}
