import { Component, OnInit } from '@angular/core';
import { DataLayerService } from 'src/app/shared/services/data-layer.service';
import { TripsService } from './../../../shared/services/trips.service';
import { AuthService } from './../../../shared/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from 'src/app/shared/inmemory-db/users';

@Component({
  selector: 'app-trips-list',
  templateUrl: './trips-list.component.html',
  styleUrls: ['./trips-list.component.scss']
})
export class TripsListComponent implements OnInit {

  trips: any[];
  phone: any;

  constructor(
    private dl: DataLayerService,
    private tripService: TripsService,
    private route: ActivatedRoute,
    private _auth: AuthService
  ) {
  }

  ngOnInit() {
    this.getWeekTrips();
  }

  getWeekTrips(): void {
    const user = this._auth.user;
    if (!user) {
      this.phone = localStorage.getItem('UserPhone');
    } else {
      this.phone = user.phone;
    }
    if (!!user && user.role === Role.Passenger) {
      this.tripService.getPassengerTrip(this.phone).subscribe((res) => {
        this.trips = res;
        console.log(res);
      });
    } else {
      if (this.phone) {
        this.tripService.getPassengerTrip(this.phone).subscribe((res) => {
          this.trips = res;
          console.log(this.phone);
        });
      } else {
        this.trips = [];
      }
    }
  }
}
