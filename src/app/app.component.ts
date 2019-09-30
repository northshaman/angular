import {Component} from '@angular/core';
import {of} from 'rxjs/observable/of';
import {delay} from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngTheo';
  num = 2;
  cars = [
    {name: 'Ford'},
    {name: 'Ford1'},
    {name: 'Ford2'},
  ];
  searchCar = '';

  asyncTitle = of('Async title 3 seconds').pipe(delay(3000));


  addCar() {
    this.cars.push({name: 'New Car'});
  }
}
