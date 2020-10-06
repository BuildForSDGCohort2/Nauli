import { Component, OnInit } from '@angular/core';
import { PassengersService } from 'app/data/service/passengers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-passenger-detail',
  templateUrl: './passenger-detail.component.html',
  styleUrls: ['./passenger-detail.component.scss']
})
export class PassengerDetailComponent implements OnInit {

  passenger: any;
  passengerId: string;
  seatNo;

  constructor(
    private _paxService: PassengersService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const passengerId = this._route.snapshot.params['id'];
    this.getPassenger(passengerId);
  }

  getPassenger = (id) => {
    this._paxService.getPassengerDetail(id).subscribe(
      (res: any)=> {
        console.log('PASSENGER DETAIL: ', res);
        this.passenger = res;
        this.seatNo = res.seat_no

      },
      (err) => console.log('Passenger detail error: ', err));
  }

}
