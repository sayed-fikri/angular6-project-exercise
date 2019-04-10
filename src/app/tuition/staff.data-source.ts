import {Observable} from 'rxjs';
import {DataSource} from '@angular/cdk/collections';
import {Staff} from './staff.model';
import {TuitionService} from '../../services/tuition.service';

export class StaffDataSource extends DataSource<any> {

  constructor(private academyService: TuitionService) {
    super();
  }

  connect(): Observable<Staff[]> {
    return this.academyService.findStaffs();
  }

  disconnect() {
  }
}
