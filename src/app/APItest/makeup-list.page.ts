import {Component, OnInit} from '@angular/core';
import {Makeup} from './makeup.model';
import {Observable} from 'rxjs';
import {MakeupService} from '../../services/makeup.service';
import {Router} from '@angular/router';

@Component({
  selector: 'trg-makeup-list',
  templateUrl: './makeup-list.page.html',
})
export class MakeupListPage implements OnInit {
  public columns = ['id', 'brand', 'name'];

  public dataSource: Observable<Makeup[]>;

  constructor(private makeupService: MakeupService,
              private router: Router) {

  }

  ngOnInit(): void {
    this.dataSource = this.makeupService.findMakeup();
  }

  view(makeup: Makeup): void {
    console.log(JSON.stringify(makeup));
    this.router.navigate(['makeup/list/', makeup.id]);

  }
}
