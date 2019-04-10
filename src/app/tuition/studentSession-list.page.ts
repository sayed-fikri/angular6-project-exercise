import {Component, OnInit} from '@angular/core';
import {StudentSession} from './studentSession.model';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {TuitionService} from '../../services/tuition.service';
import {StudentSessionDataSource} from './studentSession.data-source';
import {Subject} from './subject.model';

@Component({
  selector: 'trg-studentSession-list',
  templateUrl: './studentSession-list.page.html'
})

export class StudentSessionListPage implements OnInit {
  //field
  dataSource: Observable<StudentSession[]>;
  public columns = ['sessionCode'];

  constructor(private router: Router, private tuitionService: TuitionService) {
    console.log('Inside StudentSessionListPage constructor');

  }

  ngOnInit(): void {
    this.dataSource = this.tuitionService.findStudentSessions();
    console.log('This is inside StudentSessionListPage');
    this.dataSource.subscribe(data =>{
      console.log(data);
    })
  }
}
