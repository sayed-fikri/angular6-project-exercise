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
  MatButtonToggleModule, MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatNativeDateModule,
  MatPaginatorModule, MatSnackBarModule,
  MatSortModule,
  MatTooltipModule
} from '@angular/material';

import {MatTableModule} from '@angular/material/table';
import {SubjectListPage} from './subject-list.page';
import {SubjectDetailPage} from './subject-detail.page';
import {StudentListPage} from './student-list.page';
import {InstructorListPage} from './instructor-list.page';
import {StaffListPage} from './staff-list.page';
import {StaffDetailPage} from './staff-detail.page';
import {AttendanceListPage} from './attendance-list.page';
import {StudentSessionListPage} from './studentSession-list.page';
import {StudentSessionDetailPage} from './studentSession-detail.page';
import {PostListPage} from './post-list.page';
import {PostDetailsPage} from './post-detail.page';
import {TodosListPage} from './todos/todos-list.page';
import {TodosDetailPage} from './todos/todos-detail.page';
import {JsonBackendListPage} from './jason-backend-list.page';
import {PostDetailPage} from './jason-backend-detail.page';
import {NricPipe} from './nric-pipe';
import {PostBodyPipe} from './post-detail-pipe';
import {PostCreatorDialog} from './post-creator.dialog';
import {StaffCreatorDialog} from './staff-creator.dialog';


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
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
    MatSnackBarModule,

  ],
  declarations: [
    SubjectListPage,
    SubjectDetailPage,
    StudentListPage,
    InstructorListPage,
    StaffListPage,
    StaffDetailPage,
    AttendanceListPage,
    StudentSessionListPage,
    StudentSessionDetailPage,
    PostListPage,
    PostDetailsPage,
    StudentSessionDetailPage,
    TodosListPage,
    TodosDetailPage,
    PostDetailPage,
    JsonBackendListPage,
    NricPipe,
    PostBodyPipe,
    PostCreatorDialog,
    StaffCreatorDialog



  ],
  exports: [],
  entryComponents: [
    PostCreatorDialog,
    StaffCreatorDialog
  ]

})
export class TuitionModule {
}


