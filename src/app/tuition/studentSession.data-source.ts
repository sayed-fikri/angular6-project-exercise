import {Observable} from 'rxjs';
import {DataSource} from '@angular/cdk/collections';
import {TuitionService} from '../../services/tuition.service';
import {StudentSession} from './studentSession.model';

export class StudentSessionDataSource extends DataSource<any> {

  constructor(private tuitionService: TuitionService) {
    super();
  }

  connect(): Observable<StudentSession[]> {
    return this.tuitionService.findStudentSessions();
  }

  disconnect() {
  }
}
