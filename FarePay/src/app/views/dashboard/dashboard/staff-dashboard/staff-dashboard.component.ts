import { Component, OnInit } from '@angular/core';
import { DataLayerService } from 'src/app/shared/services/data-layer.service';
import { ITrip } from 'src/app/shared/inmemory-db/trips';
import { TripsService } from 'src/app/shared/services/trips.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-staff-dashboard',
  templateUrl: './staff-dashboard.component.html',
  styleUrls: ['./staff-dashboard.component.scss']
})
export class StaffDashboardComponent implements OnInit {

  hasActiveTrip: boolean;
  loading: boolean;
  cards = [
    {
      title: 'Set Trip',
      subtitle: 'Set a new trip',
      url: '/set-trip',
      icon: 'assets/images/bus.svg'
    },

    {
      title: 'Trip Logs',
      subtitle: 'View recorded trips',
      url: '/vehicle-trips',
      icon: 'assets/images/time.svg'
    },
  ];


  constructor(
    private tripService: TripsService,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.determineTripCard();
  }




  determineTripCard() {
    this.loading = true;
    this.tripService.searchVehicleTripsByTout(this.auth.user.id).subscribe(
      (res: any[]) => {
        this.loading = false;
        console.log('Trips by Tout: ', res);
        const activeTrips = res.filter((trrip: any) => !trrip.ending_time);
        if (activeTrips.length > 0) {
          this.hasActiveTrip = activeTrips.length > 0;
          const tripId = activeTrips[0].id;
          this.setActiveTrip(tripId);
        }
        console.log('Has active trip: ', this.hasActiveTrip);
      }
    );

  }

  setActiveTrip = (tripId) => {
    this.cards[0] = {
      title: 'Update Trip',
      subtitle: 'End initialized trip',
      url: `/edit-trip/${tripId}`,
      icon: 'assets/images/bus.svg'
    };
    this.cards[1] = {
      title: 'Passengers',
      subtitle: 'Collect payment for active trips',
      url: `/seats/${tripId}`,
      icon: 'assets/images/passengers.svg'
    };
    this.cards[2] = {
      title: 'Trip Logs',
      subtitle: 'View recorded trips',
      url: '/vehicle-trips',
      icon: 'assets/images/time.svg'
    };
  }


}
