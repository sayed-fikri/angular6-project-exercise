import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'postBody'})
export class PostBodyPipe implements PipeTransform {

  constructor() {}




  transform(value:PostBodyPipe): any {
    if (value) {
      return 'Click to see the post content';
    }

  }



}
