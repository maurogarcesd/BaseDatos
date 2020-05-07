import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'areas'
})
export class AreasPipe implements PipeTransform {

  
  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 5) return value;
    const resultBases = [];
    for (const base of value) {
      if (base.AREA_ACADEMICA.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultBases.push(base);
      };
    };
    return resultBases;
  }
}