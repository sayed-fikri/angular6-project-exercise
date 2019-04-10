import {Instructor} from './instructor-model';
import {Subject} from './subject.model';

export interface StudentSession {
  instructor: Instructor;
  subject: Subject;
  sessionCode: string;
  time: string;

}
