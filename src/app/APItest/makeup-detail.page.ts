import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {MakeupService} from '../../services/makeup.service';
import {Makeup} from './makeup.model';
import {log} from 'util';



@Component({
  selector: 'trg-makeup-detail',
  templateUrl: './makeup-detail.page.html',
})
export class MakeupDetailPage implements OnInit {
  mainForm: FormGroup;
  submitted = false;
  makeup$: Observable<Makeup> = null;

  constructor(private form: FormBuilder,
              private makeupservice: MakeupService,
              private route: ActivatedRoute,
              private  router: Router
  ) {
    this.mainForm = this.form.group({
      price: ['', Validators.required],
      price_sign: ['', Validators.required],
      currency: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: { id: number }) => {
      // extract param
      this.makeup$ = this.makeupservice.findMakeupById(params.id);
    });

    // patch form values
    this.makeup$.subscribe(makeup => this.mainForm.patchValue(makeup));
  }
  back(makeup: Makeup): void {
    console.log(JSON.stringify(makeup));
    this.router.navigate( ['/makeup/list']);
  }

}
