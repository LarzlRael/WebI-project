import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'saludo'
})
export class SaludoPipe implements PipeTransform {

  transform(value: number): any {
    let p: number=0;
    for (let i = 0; i < value; i++) {
      p += p + i;

    }
    return p;
  }

}
