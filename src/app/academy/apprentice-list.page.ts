import {Component, OnInit} from '@angular/core';
import {ApprenticeDataSource} from './apprentice.data-source';
import {AcademyService} from '../../services/academy.service';
import {Apprentice} from './apprentice.model';
import {Router} from '@angular/router';

@Component({
  selector: 'trg-apprentice-list',
  templateUrl: './apprentice-list.page.html',
  styleUrls: ['./apprentice-list.page.scss']
})
export class ApprenticeListPage implements OnInit {

  public columns = ['id', 'code', 'name'];
  public dataSource: ApprenticeDataSource;

  constructor(private academyService: AcademyService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.dataSource = new ApprenticeDataSource(this.academyService);
  }

  view(apprentice: Apprentice): void {
    console.log(JSON.stringify(apprentice));
    this.router.navigate(['/academy/apprentices/', apprentice.code]);
  }
}
