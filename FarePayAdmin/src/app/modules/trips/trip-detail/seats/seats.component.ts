import { Component, OnInit, Input } from '@angular/core';
import { SeatDB } from 'app/data/inmemory_db/seats';
import { ISeat } from '@shared/components/bus-layout/bus-layout.component';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.scss']
})
export class SeatsComponent implements OnInit {

  seats = SeatDB.seats;
  seat = {
    staff: 'assets/images/staff-chair.svg',
    unpaid: 'assets/images/unpaid-chair.svg',
    paid: 'assets/images/pass-chair.svg',
    occupied: 'assets/images/pass-chair.svg',
    unoccupied: 'assets/images/unoccupied-chair.svg',
  };

  @Input() seatData: any[];

  constructor() { }

  ngOnInit(): void {
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
    const occupiedSeats = this.seatData.map(seat => seat.seatNo);
    return occupiedSeats.includes(seat.num);
  }

}
