import {Observable} from 'rxjs';
import {DataSource} from '@angular/cdk/collections';
import {TuitionService} from '../../services/tuition.service';
import {Posts} from './post.model';

export class PostDataSource extends DataSource<any> {

  constructor(private academyService: TuitionService) {
    super();
  }

  connect(): Observable<Posts[]> {
    return this.academyService.findPosts();

  }

  disconnect() {
  }
}
