import {Component, OnInit} from '@angular/core';
import {Student} from './student.model';
import {Router} from '@angular/router';
import {TuitionService} from '../../services/tuition.service';
import {Observable} from 'rxjs';
import {Instructor} from './instructor-model';


@Component({
  selector: 'trg-student-detail',
  templateUrl: './student-list.page.html',
})
export class StudentListPage implements OnInit {
  datasource: Observable<Student[]>;
  public columns = ['name', 'gender', 'idNumber'];


  constructor(private router: Router, private tuitionService: TuitionService) {
    console.log('Inside Student  List');
    console.log('//console.log(JSON.stringify(apprentice));');

  }

  ngOnInit(): void {
    this.datasource = this.tuitionService.findStudents();
  }
}
