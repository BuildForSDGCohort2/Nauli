import { Component, OnInit, Input } from '@angular/core';
import { PassengersDB, IPassenger } from 'app/data/inmemory_db/passengers';
import { PassengersService } from 'app/data/service/passengers.service';

@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.scss']
})
export class PassengersComponent implements OnInit {

  @Input() passengers: any[];

  constructor(
    private _paxService: PassengersService
  ) { }

  ngOnInit(): void {
    // if (this.vehicleTripId) {
    //   this.getPassengers(this.vehicleTripId);
    // }

  }

}
