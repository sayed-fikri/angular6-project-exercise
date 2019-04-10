import {TuitionService} from '../../../services/tuition.service';
import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Todos} from './todos.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'trg-todos-detail',
  templateUrl: './todos-detail.page.html',
})
export class TodosDetailPage implements OnInit {

  album$: Observable<Todos>;
  constructor(private tuitionService: TuitionService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // extracting param from url
    this.route.params.subscribe((params: { id: number }) => {
      this.album$ = this.tuitionService.findTodosById(params.id);
    });
  }
}
