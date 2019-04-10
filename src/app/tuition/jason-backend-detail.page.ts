import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {TuitionService} from '../../services/tuition.service';
import {Post} from './jason-backend-model';


@Component({
  selector: 'trg-post-detail',
  templateUrl: './jason-backend-detail.page.html',
})
export class PostDetailPage implements OnInit {

  post$: Observable<Post>;
  constructor(private tuituionService: TuitionService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // extracting param from url
   // this.route.params.subscribe((params: { id: string }) => {
     // this.post$ = this.tuituionService.findPost(params.id);
    }
  }

