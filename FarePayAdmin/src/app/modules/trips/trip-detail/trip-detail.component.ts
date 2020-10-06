import { Component, OnInit } from '@angular/core';
import { TripsService } from 'app/data/service/trips.service';
import { ActivatedRoute } from '@angular/router';
import { PassengersService } from 'app/data/service/passengers.service';

@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrls: ['./trip-detail.component.scss']
})
export class TripDetailComponent implements OnInit {

  trip: any;
  tripId: string;
  passengers: any[];
  seatData: any[];  // contains data for pax name and the seat no.

  constructor(
    private _tripService: TripsService,
    private _route: ActivatedRoute,
    private _paxService: PassengersService
  ) { }

  ngOnInit(): void {
    const tripId = this._route.snapshot.params['id'];
    this.getTrip(tripId);
  }

  getTrip(tripId) {
    this._tripService.getTripDetail(tripId).subscribe(
      (res: any) => {
        this.trip = res;
        this.getPassengers(this.trip.id);
      }
    )
  }


  /**
   * Returns list of passengers in vehicle trip
   * @param vehicleTripId
   */
  getPassengers = (vehicleTripId) => {
    this._paxService.getPassengers().subscribe(
      (res: any[])=> {
        console.log('PASSENGER LIST: ', res);
        this.passengers = res.filter((paxTrip: any) => paxTrip.vehicleTrip.id === vehicleTripId);
        console.log('PASSENGERS IN TRIP ARE: ', this.passengers)
        this.seatData = this.getSeatData(this.passengers)
        console.log('TRIP SEAT DATA: ', this.seatData);

      },
      (err) => console.log('Passenger list error: ', err));
  }

  getSeatData = (passengers): any[] => {
    let seatData = []
    passengers.forEach(pax => {
      let paxName = pax.passenger_name;
      const seatNo = pax.seat_no;
      seatData.push({paxName, seatNo})
    });
    return seatData;
  }

}
