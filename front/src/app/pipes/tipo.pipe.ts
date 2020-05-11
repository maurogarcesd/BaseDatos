import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipo'
})
export class TipoPipe implements PipeTransform {

  
  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 5) return value;
    const resultBases = [];
    for (const base of value) {
      if (base.TIPO_RECURSO.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultBases.push(base);
      };
    };
    return resultBases;
  }
}