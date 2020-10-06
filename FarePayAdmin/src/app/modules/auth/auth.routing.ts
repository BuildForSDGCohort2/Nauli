import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthPageComponent } from './authpage/auth-page.component';

const routes: Routes = [
      {
        path: 'login',
        component: AuthPageComponent
      },
      {
        path: 'register',
        component: AuthPageComponent
      },
      {
        path: 'reset-password',
        component: AuthPageComponent
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
