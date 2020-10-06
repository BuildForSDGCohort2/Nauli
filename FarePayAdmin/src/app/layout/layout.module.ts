import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './auth/auth.component';
import { ErrorsComponent } from './errors/errors.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AdminComponent } from './admin/admin.component';
import { SidenavComponent } from './admin/sidenav/sidenav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { RestaurantProfileComponent } from './admin/sidenav/restaurant-profile/restaurant-profile.component';
import { AngularMaterialModule } from '@shared/third-party-components/angular-material.module';

const components = [HeaderComponent, AuthComponent, AdminComponent, ErrorsComponent, SidenavComponent];


@NgModule({
  declarations: [HeaderComponent, AuthComponent, AdminComponent, ErrorsComponent, SidenavComponent, RestaurantProfileComponent],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    AngularMaterialModule,
    PerfectScrollbarModule,
    NgbModule
  ],
  exports: components
})

export class LayoutModule { }
