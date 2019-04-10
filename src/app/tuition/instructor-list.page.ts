import {Component, OnInit} from '@angular/core';
import {Subject} from './subject.model';
import {Router} from '@angular/router';
import {TuitionService} from '../../services/tuition.service';
import {Instructor} from './instructor-model';
import {Observable} from 'rxjs';

@Component({
  selector: 'trg-instructor-list',
  templateUrl: './instructor-list.page.html',
})
export class InstructorListPage implements OnInit {

  datasource: Observable<Instructor[]>;
  public columns = ['id', 'name', 'gender', 'nric', 'email'];

  constructor(private router: Router, private tuitionService: TuitionService) {
    console.log('Inside instructor List');
    //console.log(JSON.stringify(this.));
    console.log('//console.log(JSON.stringify(instructor));');
  }

  ngOnInit(): void {
    this.datasource = this.tuitionService.findInstructors();
  }
}
