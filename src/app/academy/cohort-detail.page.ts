import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Cohort} from './cohort.model';
import {CohortStatus} from './cohort-status.enum';
@Component({
  selector: 'trg-cohort-detail',
  templateUrl: './cohort-detail.page.html',
  styleUrls: ['./cohort-detail.page.scss']
})
export class CohortDetailPage implements OnInit {

  // fields
  mainForm: FormGroup;
  cohort: Cohort;
  submitted = false;

  constructor(private form: FormBuilder) {

    // initialize form controls
    this.mainForm = this.form.group({
      code: ['', Validators.required],
      description: ['', Validators.minLength(6)],
    });
  }

  ngOnInit() {
    // initialize cohort
    this.cohort = {
      id: 100,
      code: 'CHRT-100',
      description: 'Cohort 01',
      status: CohortStatus.DEPLOYED
    };

    // patch form values
    this.mainForm.patchValue(this.cohort);
  }

  onSubmit() {
    console.log('');
    this.submitted = true;
  }
}
