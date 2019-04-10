import {Component} from '@angular/core';
@Component({
  selector: 'trg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],


})
export class AppComponent {
  title = 'app';

  getRouteAnimation(outlet) {
    return outlet.activatedRouteData.animation;
  }
}
