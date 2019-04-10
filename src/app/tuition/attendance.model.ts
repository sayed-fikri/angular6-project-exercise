import {Student} from './student.model';
import {StudentSession} from './studentSession.model';

export interface Attendance {
  student: Student;
  session: StudentSession;
}
