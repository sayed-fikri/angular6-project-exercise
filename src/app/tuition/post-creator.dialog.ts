import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'trg-post-creator',
  templateUrl: './post-creator.dialog.html',
  styleUrls:['./post-creator.page.scss']
})
export class PostCreatorDialog implements OnInit {

  mainForm: FormGroup;
  submitted = false;

  constructor(private dialogRef: MatDialogRef<PostCreatorDialog>,
              private form: FormBuilder) {
    this.mainForm = this.form.group({
      //id: ['', Validators.required],
      title: ['', Validators.minLength(6)],
      body: ['', Validators.required],
      date: ['', Validators.required],
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
