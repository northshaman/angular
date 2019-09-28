import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  @Output('onAddCar') carEmitter = new EventEmitter<{ name: string, year: number }>();
  @ViewChild('carYearInput', {read: false, static: false}) carYearInput: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  addCar(carNameInput: HTMLInputElement) {
    this.carEmitter.emit({name: carNameInput.value, year: +this.carYearInput.nativeElement.value});
    this.carYearInput.nativeElement.value = 2017;
  }

}
