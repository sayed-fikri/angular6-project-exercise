import {Observable} from 'rxjs';
import {DataSource} from '@angular/cdk/collections';
import {Apprentice} from './apprentice.model';
import {AcademyService} from '../../services/academy.service';

export class ApprenticeDataSource extends DataSource<any> {

  constructor(private academyService: AcademyService) {
    super();
  }

  connect(): Observable<Apprentice[]> {
    return this.academyService.findApprentices();
  }

  disconnect() {
  }
}
