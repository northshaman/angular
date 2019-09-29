import {Component, DoCheck, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnChanges, DoCheck{
  @Input('carItem') car: { name: string, year: number };
  @Input('name') carName: string;
  private carItem = false;

  ngOnChanges(changes: SimpleChanges) {
    console.log('OnChanges', changes);
  }

  ngDoCheck() {
    console.log('doCheck');
  }

}
