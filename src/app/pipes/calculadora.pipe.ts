import { Pipe, PipeTransform } from '@angular/core'
@Pipe({
      name: 'raiz_cuadrada'
})
export class raiz_cuadrada implements PipeTransform {
      transform(value: number) {
            return Math.sqrt(value);

      }
}