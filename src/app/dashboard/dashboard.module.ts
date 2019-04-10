import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {RoundProgressbarComponent} from './round-progressbar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatChipsModule, MatIconModule, MatListModule, MatMenuModule, MatProgressBarModule, MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {RoundProgressModule} from 'angular-svg-round-progressbar';
import {Ng2OdometerModule} from 'ng2-odometer';
import {DashboardComponent} from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatChipsModule,
    MatProgressBarModule,
    Ng2OdometerModule,
    RoundProgressModule,
    FormsModule,
  ],
  declarations: [
    DashboardComponent,
    RoundProgressbarComponent
  ],
  exports: [
    RoundProgressbarComponent,
  ]
})
export class DashboardModule {
}
