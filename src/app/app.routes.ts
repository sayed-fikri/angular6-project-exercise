import {Routes} from '@angular/router';
import {MainComponent} from './main/main.layout';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ApprenticeListPage} from './academy/apprentice-list.page';
import {CohortListPage} from './academy/cohort-list.page';
import {ApprenticeDetailPage} from './academy/apprentice-detail.page';
import {CohortDetailPage} from './academy/cohort-detail.page';
import {SubjectListPage} from './tuition/subject-list.page';
import {InstructorListPage} from './tuition/instructor-list.page';
import {StudentListPage} from './tuition/student-list.page';
import {StaffListPage} from './tuition/staff-list.page';
import {StaffDetailPage} from './tuition/staff-detail.page';
import {AttendanceListPage} from './tuition/attendance-list.page';
import {StudentSessionListPage} from './tuition/studentSession-list.page';
import {PostListPage} from './tuition/post-list.page';
import {PostDetailsPage} from './tuition/post-detail.page';
import {TodosListPage} from './tuition/todos/todos-list.page';
import {TodosDetailPage} from './tuition/todos/todos-detail.page';
import {JsonBackendListPage} from './tuition/jason-backend-list.page';
import {PostDetailPage} from './tuition/jason-backend-detail.page';
import {MakeupListPage} from './APItest/makeup-list.page';
import {MakeupDetailPage} from './APItest/makeup-detail.page';


export const appRoutes: Routes = [{
  path: '', component: MainComponent, children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'academy/cohorts/list', component: CohortListPage},
    {path: 'academy/cohorts/:code', component: CohortDetailPage},
    {path: 'academy/apprentices/list', component: ApprenticeListPage},
    {path: 'academy/apprentices/:code', component: ApprenticeDetailPage},

    {path: 'tuition/subjects', component: SubjectListPage},
    {path: 'tuition/instructors', component: InstructorListPage},
    {path: 'tuition/students', component: StudentListPage},
    {path: 'tuition/subjects/list', component: SubjectListPage},
    {path: 'tuition/instructors/list', component: InstructorListPage},
    {path: 'tuition/students/list', component: StudentListPage},
    {path: 'tuition/staff/:id', component: StaffDetailPage},
    {path: 'tuition/staffs/list', component: StaffListPage},
    {path: 'tuition/attendance/list', component: AttendanceListPage},
    {path: 'tuition/studentSession/list', component: StudentSessionListPage},
    {path: 'tuition/post/list', component: PostListPage},
    {path: 'tuition/post/:id', component: PostDetailsPage},
    {path: 'tuition/todos/list', component: TodosListPage},
    {path: 'tuition/todos/list/:id', component: TodosDetailPage},
    {path: 'tuition/jsonbackend/list', component: JsonBackendListPage},
    {path: 'tuition/jsonbackend/:id', component: PostDetailPage},

    {path: 'makeup/list', component: MakeupListPage},
    {path: 'makeup/list/:id', component: MakeupDetailPage},


  ]
}];
