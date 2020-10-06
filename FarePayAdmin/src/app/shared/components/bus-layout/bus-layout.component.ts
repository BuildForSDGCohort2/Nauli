import { Component, OnInit } from '@angular/core';


export interface IUser {
  _id: string;
  type: 'passenger' | 'conductor' | 'driver' | 'saccoAdmin' | 'MOH';
  phoneNumber: string;
  password: string;
  names: string;
  sacco?: string;
}

export interface ISeat {
  _id: string;
  num: number;
  type: 'passenger' | 'driver' | 'conductor';
  occupationStatus: boolean;
  paymentStatus: boolean;
}


@Component({
  selector: 'app-bus-layout',
  templateUrl: './bus-layout.component.html',
  styleUrls: ['./bus-layout.component.scss']
})
export class BusLayoutComponent implements OnInit {


  seats: ISeat[] = [
    {
      _id: '5a9ae2106518248b6',
      num: 3,
      type: 'passenger',
      occupationStatus: false,
      paymentStatus: false,
    },
    {
      _id: '5a9ae2106518248b68251ffd',
      num: 2,
      type: 'passenger',
      occupationStatus: false,
      paymentStatus: false,
    },
    {
      _id: '5a9ae21018248b68251fdf',
      num: 1,
      type: 'driver',
      occupationStatus: true,
      paymentStatus: true,
    },
    {
      _id: '5a9a106518248b68251fdf',
      num: 4,
      type: 'conductor',
      occupationStatus: true,
      paymentStatus: true,
    },
    {
      _id: '5a9ae21065182488251fdf',
      num: 5,
      type: 'passenger',
      occupationStatus: false,
      paymentStatus: false,
    },
    {
      _id: '5ae2106518248b68251fdf',
      num: 6,
      type: 'passenger',
      occupationStatus: false,
      paymentStatus: false,
    },
    {
      _id: '5a9ae210658248b682f',
      num: 9,
      type: 'passenger',
      occupationStatus: false,
      paymentStatus: false,
    },
    {
      _id: '5a92106518248b681fdf',
      num: 8,
      type: 'passenger',
      occupationStatus: false,
      paymentStatus: false,
    },
    {
      _id: '5a9a106518248b6825df',
      num: 7,
      type: 'passenger',
      occupationStatus: false,
      paymentStatus: false,
    },
    {
      _id: '5a9ae210518248b681fdf',
      num: 10,
      type: 'passenger',
      occupationStatus: false,
      paymentStatus: false,
    },
    {
      _id: '59ae210651824b68251fdf',
      num: 11,
      type: 'passenger',
      occupationStatus: false,
      paymentStatus: false,
    },
    {
      _id: '9ae2106518248b68251fdf',
      num: 12,
      type: 'passenger',
      occupationStatus: false,
      paymentStatus: false,
    },
    {
      _id: '5a9ae2106518248b6821ff',
      num: 13,
      type: 'passenger',
      occupationStatus: false,
      paymentStatus: false,
    },
    {
      _id: '5aae2106518248b6251ff',
      num: 14,
      type: 'passenger',
      occupationStatus: false,
      paymentStatus: false,
    },
    {
      _id: 'aae210651248b8251df',
      num: 15,
      type: 'passenger',
      occupationStatus: false,
      paymentStatus: false,
    },

  ];

  seat = {
    staff: 'assets/images/staff-chair.svg',
    unpaid: 'assets/images/unpaid-chair.svg',
    paid: 'assets/images/pass-chair.svg',
    occupied: 'assets/images/pass-chair.svg',
    unoccupied: 'assets/images/unoccupied-chair.svg',
  };
  // seats: ISeat[];


  constructor() { }

  ngOnInit(): void {
  }

  getSeat(seat: ISeat) {
          return !seat.occupationStatus ? this.seat.unoccupied : seat.paymentStatus ? this.seat.paid : this.seat.unpaid;
    }

  } 
