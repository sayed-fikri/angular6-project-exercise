import {Component, OnInit} from '@angular/core';
import {TuitionService} from '../../../services/tuition.service';
import {Observable} from 'rxjs';
import {Todos} from './todos.model';
import {Router} from '@angular/router';

@Component({
  selector: 'trg-todos-list',
  templateUrl: './todos-list.page.html',
})
export class TodosListPage implements OnInit {

  datasource: Observable<Todos[]>;
  public columns = ['id', 'title', 'completed'];

  constructor(private router: Router, private tuitionService: TuitionService) {
    console.log('Inside instructor List');
    //console.log(JSON.stringify(this.));
    console.log('//console.log(JSON.stringify(instructor));');
  }

  ngOnInit(): void {
    this.datasource = this.tuitionService.findTodos();
  }
}
