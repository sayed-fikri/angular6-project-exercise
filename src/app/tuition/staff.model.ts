import {Person} from './person.model';

export interface  Staff extends Person {
  id: number;
  nric: number;
  role: string;
  phone: string;
  email: string;
}
