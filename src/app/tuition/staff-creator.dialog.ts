import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'trg-staff-creator',
  templateUrl: './staff-creator.dialog.html',
  styleUrls:['./staff-creator.page.scss']
})
export class StaffCreatorDialog implements OnInit {

  mainForm: FormGroup;
  submitted = false;

  constructor(private dialogRef: MatDialogRef<StaffCreatorDialog>,
              private form: FormBuilder) {
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
  }

  onSubmit(value: any) {
    console.log(JSON.stringify(value));
    this.submitted = true;
    this.dialogRef.close();
  }
}
