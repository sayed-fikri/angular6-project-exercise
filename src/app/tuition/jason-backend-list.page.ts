import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Post} from './jason-backend-model';
import {TuitionService} from '../../services/tuition.service';


@Component({
  selector: 'trg-post-list',
  templateUrl: './jason-backend-page.list.html',
})
export class JsonBackendListPage implements OnInit {

  datasource: Observable<Post[]>;
  public columns = ['userId', 'id', 'title', 'body'];

  constructor(private router: Router,
              private tuitionService: TuitionService) {
    console.log('Inside jason backend page');
    // console.log(JSON.stringify(this.));
  }

  ngOnInit(): void {
    //this.datasource = this.tuitionService.findPost();
  }

  view(post: Post): void {
    // build the url for detail page of post
    this.router.navigate(['tuition/jsonbackend', post.id]);
  }
}
