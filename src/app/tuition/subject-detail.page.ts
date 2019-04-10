import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subject} from './subject.model';

@Component({
  selector: 'trg-subject-detail',
  templateUrl: './subject-detail.page.html',
})
export class SubjectDetailPage implements OnInit {

  // fields
  constructor() {

    // initialize form controls
  }

  ngOnInit() {
    // initialize cohort
    // patch form values
    console.log('inside onInit SubjectDetailpage');
  }

  onSubmit() {
    console.log('Inside onSubmit SubjectDetailPage');
  }
}
