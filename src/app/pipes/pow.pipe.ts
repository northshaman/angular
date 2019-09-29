import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'appPow'
})

export class PowPipe implements PipeTransform {

  transform(value: number, powNumber: number = 1, symbol: string): any {
    return symbol + Math.pow(value, powNumber);
  }

}
