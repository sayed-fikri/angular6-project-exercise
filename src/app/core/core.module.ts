import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidemenuComponent} from './sidemenu/sidemenu.component';
import {SidemenuItemComponent} from './sidemenu-item/sidemenu-item.component';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressBarModule, MatSidenavModule, MatSliderModule, MatTabsModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {UserMenuComponent} from './user-menu/user-menu.component';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({

  declarations: [
    SidemenuComponent,
    SidemenuItemComponent,
    ToolbarComponent,
    UserMenuComponent
  ],

  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatChipsModule,
    RouterModule,
    PerfectScrollbarModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatTabsModule,
    MatSliderModule,
    MatProgressBarModule,
  ],


  exports: [
    SidemenuComponent,
    SidemenuItemComponent,
    ToolbarComponent,
    UserMenuComponent
  ],

  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class CoreModule {
}
