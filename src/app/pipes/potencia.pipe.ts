import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pot'
})
export class PotenciaPipe implements PipeTransform {

  transform(value: number): number {
    return Math.pow(value,2);
  }

}
