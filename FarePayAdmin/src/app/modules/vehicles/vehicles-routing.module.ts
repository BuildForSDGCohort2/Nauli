import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleAddComponent } from './vehicle-add/vehicle-add.component';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';
import { VehicleTypeAddComponent } from './vehicle-type-add/vehicle-type-add.component';
import { VehicleTypeDetailComponent } from './vehicle-type-detail/vehicle-type-detail.component';
import { VehicleTypeListComponent } from './vehicle-type-list/vehicle-type-list.component';


const routes: Routes = [
  {
    path: 'vehicles',
    component: VehicleListComponent
  },
  {
    path: 'vehicles/add',
    component: VehicleAddComponent
  },
  {
    path: 'vehicles/detail/:id',
    component: VehicleDetailComponent
  },
  {
    path: 'vehicles/edit/:id',
    component: VehicleAddComponent
  },
  {
    path: 'vehicle-types',
    component: VehicleTypeListComponent
  },
  {
    path: 'vehicle-types/add',
    component: VehicleTypeAddComponent
  },
  {
    path: 'vehicle-types/edit/:id',
    component: VehicleTypeAddComponent
  },
  {
    path: 'vehicle-types/detail/:id',
    component: VehicleTypeDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiclesRoutingModule { }
