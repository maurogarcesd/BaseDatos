import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unique'
})
export class UniquePipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultBases = [];
    for (const base of value) {
     base.reduce((resultBases.reduce, base.AREA_ACADEMICA))
      resultBases.push(base.AREA_ACADEMICA)
      };

    };
    

  }


