import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ColorPickerModule } from 'ngx-color-picker';
import { RecordNotesComponent } from './record-notes/record-notes.component';
import { TripsComponent } from './trips/trips.component';
import { SeatsComponent } from './seats/seats.component';
import { TripsListComponent } from './trips-list/trips-list.component';
import { HeaderComponent } from './shared/header/header.component';
import { PassengerDashboardComponent } from './dashboard/passenger-dashboard/passenger-dashboard.component';
import { StaffDashboardComponent } from './dashboard/staff-dashboard/staff-dashboard.component';
import { SetTripComponent } from './dashboard/staff-dashboard/set-trip/set-trip.component';
import { TripDetailsComponent } from './dashboard/staff-dashboard/trip-details/trip-details.component';
import { SearchTripComponent } from './dashboard/passenger-dashboard/search-trip/search-trip.component';
import { MakePaymentComponent } from './make-payment/make-payment.component';
import { BackHeaderComponent } from './shared/back-header/back-header.component';
import { TripMapComponent } from './trip-map/trip-map.component';

import { AgmCoreModule } from '@agm/core';
import { ReceiptComponent } from './receipt/receipt.component';
import { SelectPaymentComponent } from './select-payment/select-payment.component';
import { PayToConductorComponent } from './pay-to-conductor/pay-to-conductor.component';
import { VehicleTripComponent } from './vehicle-trip/vehicle-trip.component';
import { VehicleTripsComponent } from './vehicle-trips/vehicle-trips.component';



@NgModule({


	declarations: [
		DashboardComponent,
		RecordNotesComponent,
		TripsComponent,
		SeatsComponent,
		TripsListComponent,
		HeaderComponent,
		PassengerDashboardComponent,
		StaffDashboardComponent,
		SetTripComponent,
		TripDetailsComponent,
		SearchTripComponent,
		BackHeaderComponent,
		MakePaymentComponent,
		TripMapComponent,
		ReceiptComponent,
		SelectPaymentComponent,
		PayToConductorComponent,
		VehicleTripComponent,
		VehicleTripsComponent
	],

	// CalendarComponent, CalendarFormDialogComponent,

	imports: [
		CommonModule,
		NgbModule,
		DashboardRoutingModule,
		FormsModule,
		AgmCoreModule,
		// AgmMap,
		// AgmMarker,
		SharedModule,
		ReactiveFormsModule,
		ColorPickerModule,
		CalendarModule.forRoot({
			provide: DateAdapter,
			useFactory: adapterFactory
		}),
	]
})
export class DashboardModule { }
