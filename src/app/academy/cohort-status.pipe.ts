import {Pipe, PipeTransform} from '@angular/core';
import {CohortStatus} from './cohort-status.enum';

@Pipe({name: 'cohortStatusPipe'})
export class CohortStatusPipe implements PipeTransform {

  transform(value: CohortStatus): any {
    if (!value) {
      return value;
    }
    console.log(value);
    switch (CohortStatus[value.toString()]) {
      case CohortStatus.STARTED : {
        return 'STARTED';
      }
      case CohortStatus.DEPLOYED : {
        return 'DEPLOYED';
      }
      case CohortStatus.COMPLETED : {
        return 'COMPLETED';
      }
      default: {
        return value;
      }
    }
  }
}
