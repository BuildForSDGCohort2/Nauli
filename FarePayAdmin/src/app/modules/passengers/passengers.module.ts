import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PassengersRoutingModule } from './passengers-routing.module';
import { PassengerDetailComponent } from './passenger-detail/passenger-detail.component';
import { PassengerListComponent } from './passenger-list/passenger-list.component';
import { SharedModule } from '@shared/shared.module';
import { TripsComponent } from './passenger-detail/trips/trips.component';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './passenger-detail/map/map.component';
import { SeatsComponent } from './passenger-detail/seats/seats.component';


@NgModule({
  declarations: [PassengerDetailComponent, PassengerListComponent, TripsComponent, MapComponent, SeatsComponent],
  imports: [
    CommonModule,
    PassengersRoutingModule,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBlmc8mW6ZufY5sxPgQXiYpaL3fLLJLoq0'
    }),
  ]
})
export class PassengersModule { }
