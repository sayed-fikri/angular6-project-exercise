import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {
  MatButtonToggleModule,
  MatCheckboxModule,
  MatChipsModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatSortModule,
  MatTooltipModule
} from '@angular/material';

import {MatTableModule} from '@angular/material/table';
import {ApprenticeListPage} from './apprentice-list.page';
import {CohortListPage} from './cohort-list.page';
import {ApprenticeDetailPage} from './apprentice-detail.page';
import {CohortDetailPage} from './cohort-detail.page';
import {CohortStatusPipe} from './cohort-status.pipe';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatToolbarModule,
    MatListModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatChipsModule,
    MatButtonToggleModule,
  ],
  declarations: [
    ApprenticeListPage,
    ApprenticeDetailPage,
    CohortListPage,
    CohortDetailPage,
    CohortStatusPipe,
  ],
  exports: []

})
export class AcademyModule {
}


