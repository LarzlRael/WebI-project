import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secuencia'
})
export class SecuenciaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
