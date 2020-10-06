import { Component, OnInit, Input } from '@angular/core';
import { TripsService } from 'app/data/service/trips.service';
import { PassengersService } from 'app/data/service/passengers.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss']
})

export class TripsComponent implements OnInit {

  @Input() phone: string;
  trips: any[];

  constructor(
    private _paxService: PassengersService
  ) { }

  ngOnInit(): void {
    if(!!this.phone){
      this.getPassengers(this.phone);
    }
  }


  getPassengers = (passenger_phone) => {
    this._paxService.getPassengers().subscribe(
      (res: any[])=> {
        console.log('PASSENGER LIST: ', res);
        this.trips = res.filter((pax: any) => pax.passenger_phone === passenger_phone)
      },
      (err) => console.log('Passenger list error: ', err));
  }


}
