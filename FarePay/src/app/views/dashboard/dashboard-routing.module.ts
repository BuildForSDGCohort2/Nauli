import { RecordNotesComponent } from './record-notes/record-notes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TripsListComponent } from './trips-list/trips-list.component';
import { SeatsComponent } from './seats/seats.component';
import { SetTripComponent } from './dashboard/staff-dashboard/set-trip/set-trip.component';
import { SearchTripComponent } from './dashboard/passenger-dashboard/search-trip/search-trip.component';
import { PassengerDashboardComponent } from './dashboard/passenger-dashboard/passenger-dashboard.component';
import { StaffDashboardComponent } from './dashboard/staff-dashboard/staff-dashboard.component';
import { MakePaymentComponent } from './make-payment/make-payment.component';
import { TripMapComponent } from './trip-map/trip-map.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { SelectPaymentComponent } from './select-payment/select-payment.component';
import { PayToConductorComponent } from './pay-to-conductor/pay-to-conductor.component';
import { VehicleTripsComponent } from './vehicle-trips/vehicle-trips.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'select-payment/:vehicleId',
    component: SelectPaymentComponent
  },
  {
    path: 'pay-tout',
    component: PayToConductorComponent
  },
  {
    path: 'passenger/receipt/:id',
    component: ReceiptComponent
  },
  {
    path: 'pay/vehicle/:vehicleId/seat/:seatNo',
    component: MakePaymentComponent
  },
  {
    path: 'trips/:id',
    component: TripsListComponent
  },
  {
    path: 'vehicle-trips',
    component: VehicleTripsComponent
  },
  {
    path: 'trips',
    component: TripsListComponent
  },
  {
    path: 'seats/:id',
    component: SeatsComponent
  },
  {
    path: 'seats',
    component: SeatsComponent
  },
  {
    path: 'search',
    component: SearchTripComponent
  },
  {
    path: 'notes/:id',
    component: RecordNotesComponent
  },
  {
    path: 'set-trip',
    component: SetTripComponent
  },
  {
    path: 'edit-trip/:id',
    component: SetTripComponent
  },
  {
    path: 'map/:id',
    component: TripMapComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
