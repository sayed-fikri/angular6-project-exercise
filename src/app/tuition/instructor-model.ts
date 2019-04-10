import {Person} from './person.model';

export interface Instructor extends Person {
  nric: string;
  id: string;
  email: string;
}
