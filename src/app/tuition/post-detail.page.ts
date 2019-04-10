import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {Posts} from './post.model';
import {TuitionService} from '../../services/tuition.service';
import {PostDataSource} from './post.data-source';
import {Staff} from './staff.model';



@Component({
  selector: 'post-post-detail',
  templateUrl: './post-detail.page.html',
})
//implements mean pesan angular
export class PostDetailsPage implements OnInit {

  public columns = ['userId', 'id', 'title','body'];
  posts$: Observable<Posts>;
  constructor(private tuitionService: TuitionService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // extracting param from url
    this.route.params.subscribe((params: { id: number }) => {
      this.posts$ = this.tuitionService.findPosted(params.id)
    });
  }


}
