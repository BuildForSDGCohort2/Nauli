import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { TripsRoutingModule } from './trips-routing.module';
import { TripsListComponent } from './trips-list/trips-list.component';
import { RoutesListComponent } from './routes-list/routes-list.component';
import { RoutesAddComponent } from './routes-add/routes-add.component';
import { TripDetailComponent } from './trip-detail/trip-detail.component';
import { SeatsComponent } from './trip-detail/seats/seats.component';
import { PassengersComponent } from './trip-detail/passengers/passengers.component';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './trip-detail/map/map.component';


@NgModule({
  declarations: [TripsListComponent, RoutesListComponent, RoutesAddComponent, TripDetailComponent, SeatsComponent, PassengersComponent, MapComponent],
  imports: [
    CommonModule,
    TripsRoutingModule,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBlmc8mW6ZufY5sxPgQXiYpaL3fLLJLoq0'
    }),
  ],
  exports: [
    SeatsComponent
  ]
})
export class TripsModule { }
