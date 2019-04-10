import {Component, OnInit} from '@angular/core';
import {Cohort} from './cohort.model';
import {Router} from '@angular/router';
import {CohortStatus} from './cohort-status.enum';

@Component({
  selector: 'trg-cohort-list',
  templateUrl: './cohort-list.page.html',
  styleUrls: ['./cohort-list.page.scss']
})
export class CohortListPage implements OnInit {

  public columns = ['id', 'code', 'description', 'status'];
  public dataSource: Cohort[];

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.dataSource = [
      {
        id: 1,
        code: 'CHRT-001',
        description: 'Cohort 01',
        status: CohortStatus.DEPLOYED
      },
      {
        id: 2,
        code: 'CHRT-002',
        description: 'Cohort 01',
        status: CohortStatus.DEPLOYED
      },
    ];
  }

  view(cohort: Cohort): void {
    console.log(JSON.stringify(cohort));
    this.router.navigate(['/academy/cohorts/', cohort.code]);
  }

}
