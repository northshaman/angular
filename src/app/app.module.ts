import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { CarsComponent } from './cars/cars.component';
import {FormsModule} from '@angular/forms';
import { AddCarComponent } from './add-car/add-car.component';
import {BackgroundDirective} from './directives/background.directive';
import { MyDirectiveDirective } from './directives/my-directive.directive';
import {PowPipe} from './pipes/pow.pipe';
import { CarFilterPipe } from './pipes/car-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CarsComponent,
    AddCarComponent,
    BackgroundDirective,
    MyDirectiveDirective,
    PowPipe,
    CarFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
