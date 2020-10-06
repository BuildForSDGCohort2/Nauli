import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiclesRoutingModule } from './vehicles-routing.module';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleAddComponent } from './vehicle-add/vehicle-add.component';
import { VehicleTypeAddComponent } from './vehicle-type-add/vehicle-type-add.component';
import { VehicleTypeListComponent } from './vehicle-type-list/vehicle-type-list.component';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';
import { VehicleTypeDetailComponent } from './vehicle-type-detail/vehicle-type-detail.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [VehicleListComponent, VehicleAddComponent, VehicleTypeAddComponent, VehicleTypeListComponent, VehicleDetailComponent, VehicleTypeDetailComponent],
  imports: [
    CommonModule,
    VehiclesRoutingModule,
    SharedModule
  ]
})
export class VehiclesModule { }
