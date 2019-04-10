import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {Staff} from './staff.model';
import {TuitionService} from '../../services/tuition.service';
@Component({
  selector: 'trg-staff-detail',
  templateUrl: './staff-detail.page.html',
  styleUrls: ['./staff-detail.page.scss']
})
export class StaffDetailPage implements OnInit {
  mainForm: FormGroup;
  submitted = false;
  staff$: Observable<Staff> = null;

  constructor(private form: FormBuilder,
              private tuitionService: TuitionService) {
    this.mainForm = this.form.group({
      name: ['', Validators.minLength(6)],
      gender: ['', Validators.required],
      id: ['', Validators.required],
      nric: ['', Validators.required],
      role: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],

    });

  }

  ngOnInit() {
    this.staff$ = this.tuitionService.findStaff(1002);

    // patch form values
    this.staff$.subscribe(staff => this.mainForm.patchValue(staff));
  }

  onSubmit() {
    console.log('');
    this.submitted = true;
  }


}
