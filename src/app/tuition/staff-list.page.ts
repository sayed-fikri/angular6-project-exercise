import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {StaffDataSource} from './staff.data-source';
import {TuitionService} from '../../services/tuition.service';
import {Staff} from './staff.model';
import {MatDialog, MatDialogConfig, MatSnackBar, MatSnackBarConfig} from '@angular/material';
import {StaffCreatorDialog} from './staff-creator.dialog';

@Component({
  selector: 'trg-staff-list',
  templateUrl: './staff-list.page.html',
  styleUrls: ['./staff-list.page.scss']
})
export class StaffListPage implements OnInit {

  public columns = ['id', 'name', 'nric'];
  public dataSource: StaffDataSource;


  constructor(private staffService: TuitionService,
              private router: Router,
              private dialog: MatDialog,
              private snackBar: MatSnackBar ) {
  }

  ngOnInit(): void {
    this.dataSource = new StaffDataSource(this.staffService);
  }

  view(staff: Staff): void {
    console.log("Data achieve");
    console.log(JSON.stringify(staff));
    this.router.navigate(['/tuition/staff/', staff.nric]);
  }

  showStaff(): void {
    const config = new MatDialogConfig();
    config.width = "800px";
    config.height = "1000px";
    const dialogRef = this.dialog.open(StaffCreatorDialog, config);
    dialogRef.afterClosed().subscribe(result => {
      this.snackBar.open('New staff has been registered', '',
        <MatSnackBarConfig>{duration: 3000});
    });
  }
}
