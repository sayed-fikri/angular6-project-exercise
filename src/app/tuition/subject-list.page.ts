import {Component, OnInit} from '@angular/core';
import {Subject} from './subject.model';
import {Router} from '@angular/router';
import {TuitionService} from '../../services/tuition.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'trg-subject-list',
  templateUrl: './subject-list.page.html',
})
export class SubjectListPage implements OnInit {

  datasource: Observable<Subject[]>;
  public columns = ['name', 'code', 'rate', 'hours','type','level'];

  constructor(private router: Router, private tuitionService: TuitionService) {
    console.log('Subject List');
   // console.log(JSON.stringify(Subject));

  }
  ngOnInit(): void {
    this.datasource = this.tuitionService.findSubjects();
  }
}
