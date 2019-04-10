import {Person} from './person.model';
import {Loan} from './student-loan.enum';

export interface Student extends Person {
  idNumber: string;
  loanStatus: Loan;
  email: string;
}
