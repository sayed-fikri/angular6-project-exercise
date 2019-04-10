import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'nricPipe'})
export class NricPipe implements PipeTransform {

  constructor() {}




    transform(value:NricPipe): any {
      if (value) {
        return '************';
      }

    }



}
