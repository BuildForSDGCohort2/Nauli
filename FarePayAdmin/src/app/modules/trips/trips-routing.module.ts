import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutesAddComponent } from './routes-add/routes-add.component';
import { TripDetailComponent } from './trip-detail/trip-detail.component';
import { RoutesListComponent } from './routes-list/routes-list.component';
import { TripsListComponent } from './trips-list/trips-list.component';


const routes: Routes = [
  {
    path: 'routes',
    component: RoutesListComponent
  },
  {
    path: 'routes/add',
    component: RoutesAddComponent
  },
  {
    path: 'routes/edit/:id',
    component: RoutesAddComponent
  },
  {
    path: 'trips',
    component: TripsListComponent
  },
  {
    path: 'trips/detail/:id',
    component: TripDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TripsRoutingModule { }
