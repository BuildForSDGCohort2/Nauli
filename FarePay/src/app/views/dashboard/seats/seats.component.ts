import { Component, OnInit } from '@angular/core';
// import { ISeat } from 'src/app/shared/inmemory-db/seats';
import { DataLayerService } from 'src/app/shared/services/data-layer.service';
import { IUser } from 'src/app/shared/inmemory-db/users';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ITrip } from 'src/app/shared/inmemory-db/trips';
import { SeatsService } from './../../../shared/services/seats.service';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ISeat, SeatDB } from 'src/app/shared/inmemory-db/seats';
import { TripsService } from 'src/app/shared/services/trips.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.scss']
})
export class SeatsComponent implements OnInit {

  confirmResut;
  paymentResut;
  activeTrip: ITrip;

  seatData;
  seatNo;
  trip: any;

  seats: ISeat[] = SeatDB.seats;
  user: any;
  type: string;

  passengers: any[];

  seat = {
    staff: 'assets/images/staff-chair.svg',
    unpaid: 'assets/images/unpaid-chair.svg',
    paid: 'assets/images/pass-chair.svg',
    occupied: 'assets/images/pass-chair.svg',
    unoccupied: 'assets/images/unoccupied-chair.svg',
  };

  selectedSeat: ISeat;
  selectedMethod: 'string';

  paymentMethods = [
    {
      method: 'Mpesa',
      modal: '#mpesaDialog',
      icon: 'assets/images/mpesa.png'
    },
    {
      method: 'Visa Card',
      modal: '#visaDialog',
      icon: 'assets/images/visa.png'
    },
    {
      method: 'Master Card',
      modal: '#masterCardDialog',
      icon: 'assets/images/master-card.png'
    },
  ];

  constructor(
    private modalService: NgbModal,
    private auth: AuthService,
    private _route: ActivatedRoute,
    private _paxService: SeatsService,
    private _tripsService: TripsService
  ) { }

  ngOnInit() {
    if (!this.auth.user) {
      this.type = 'passenger';
    } else {
      this.type = this.auth.user.role;
    }
    const tripId = this._route.snapshot.params.id;
    this.getTrip(tripId);
  }


  paySeat(content, update, seat: ISeat) {

    if (seat.type !== 'passenger') {
      return;
    }
    this.selectedSeat = seat;
    if (this.user.type === 'passenger') {
      if (!seat.occupationStatus || seat.type !== 'passenger') {
        return;
      }
      this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', centered: true });
    } else {
      this.modalService.open(update, { ariaLabelledBy: 'modal-basic-title', centered: true });
    }
  }

  selectPaymentMethod = (content, method) => {
    console.log('Payment Selector Clicked');
    this.deselectModal();
    this.selectPaymentMethod = method;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', centered: true })
      .result.then((result) => {
        this.paymentResut = `Closed with: ${result}`;
      }, (reason) => {
        this.paymentResut = `Dismissed with: ${reason}`;
      });
  }

  updateSeat = (seatData, update: any = {}) => {
    seatData[update.field] = update.value;
    this.seats.find(seat => seat === seatData)[update.field] = update.value;
  }

  deselectModal() {
    const element: HTMLElement = document.getElementById('deselector') as HTMLElement;
    element.click();
  }


  getTrip(tripId) {
    this._tripsService.getTripDetail(tripId).subscribe(
      (res: any) => {
        this.trip = res;
        this.getPassengers(this.trip.id);
      }
    );
  }


  getPassengers = (vehicleTripId) => {
    this._paxService.getPassengers().subscribe(
      (res: any[]) => {
        console.log('PASSENGER LIST: ', res);
        this.passengers = res.filter((paxTrip: any) => paxTrip.vehicleTrip.id === vehicleTripId);
        console.log('PASSENGERS IN TRIP ARE: ', this.passengers)
        this.seatData = this.getSeatData(this.passengers)
        console.log('TRIP SEAT DATA: ', this.seatData);
      },
      (err) => console.log('Passenger list error: ', err));
  }



  getSeatData = (passengers): any[] => {
    const seatData = []
    passengers.forEach(pax => {
      const paxName = pax.passenger_name;
      const seatNo = pax.seat_no;
      seatData.push({ paxName, seatNo });
    });
    return seatData;
  }


  getSeat(seat: ISeat) {
    if (seat.type !== 'passenger') {
      return this.seat.staff;
    } else {
      return this.seatOccupied(seat) ? this.seat.occupied : this.seat.unoccupied;
    }
  }


  seatOccupied = (seat) => {
    if (!this.seatData) return;
    const occupiedSeats = this.seatData.map(seatt => seatt.seatNo);
    return occupiedSeats.includes(seat.num);
  }

}
