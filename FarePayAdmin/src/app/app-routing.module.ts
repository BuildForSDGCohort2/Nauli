import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '@app/guard/auth.guard';

import { AuthComponent } from './layout/auth/auth.component';
import { ErrorsComponent } from './layout/errors/errors.component';
import { AdminComponent } from './layout/admin/admin.component';
import { Role } from './data/schema/Role';

// The application modules paths
const adminRoutes: Routes = [
    {
      path: 'dashboard',
      loadChildren: () =>  import('@modules/dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
      path: '',
      loadChildren: () =>  import('@modules/trips/trips.module').then(m => m.TripsModule)
    },
    {
      path: '',
      loadChildren: () =>  import('@modules/passengers/passengers.module').then(m => m.PassengersModule)
    },
    {
      path: '',
      loadChildren: () => import('@modules/users/menu.module').then(m => m.MenuModule)
    },
    {
      path: '',
      loadChildren: () =>  import('@modules/vehicles/vehicles.module').then(m => m.VehiclesModule)
    },
    {
      path: 'map',
      loadChildren: () => import('@modules/orders/orders.module').then(m => m.OrdersModule)
    },
    {
      path: 'payments',
      loadChildren: () => import('@modules/payments/payments.module').then(m => m.PaymentsModule)
    },
    {
      path: 'reports',
      loadChildren: () => import('@modules/reviews/reviews.module').then(m => m.ReviewsModule)
    },
]

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  // Handles layout for rendering the different application modules on signin
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: adminRoutes
  },
  // Handles signin, signup and forgot password
  {
    path: 'auth',
    component: AuthComponent,
    loadChildren: () => import('@modules/auth/auth.module').then(m => m.AuthModule)
  },
  // Handles errors such as 404 or 500
  {
    path: 'error',
    component: ErrorsComponent,
    loadChildren: () => import('@modules/error/error.module').then(m => m.ErrorModule)
  },
  // Fallback when no prior routes is matched
  { path: '**', redirectTo: '/auth/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
