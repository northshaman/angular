import {Component} from '@angular/core';

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
}
