import {CohortStatus} from './cohort-status.enum';
export interface  Cohort {
  id: number;
  code: string;
  description: string;
  status: CohortStatus;
}
