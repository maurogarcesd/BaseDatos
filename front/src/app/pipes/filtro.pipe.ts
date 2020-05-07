import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 1) return value;
    const resultBases = [];
    for (const base of value) {
      if (base.NOMBRE.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultBases.push(base);
      };
    };
    return resultBases;
  }



  
}
