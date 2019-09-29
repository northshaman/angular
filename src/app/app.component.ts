import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngTheo';
  headerText = 'Создание своей директивы';

  items = [1, 2, 3, 4, 5];
  current = 1;

  onCLick(item: number) {
  this.current = item;
  }
}
