import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.scss']
})
export class PassengerDashboardComponent implements OnInit {


  cards = [
    {
      title: 'Book Trip',
      subtitle: 'Search',
      url: '/search',
      icon: 'assets/images/bus.svg'
    },
    // {
    //   title: 'Make Payments',
    //   subtitle: 'Payment',
    //   url: '/seats',
    //   icon: 'assets/images/payment.svg'
    // },
    {
      title: 'Trip History',
      subtitle: 'History',
      url: '/trips',
      icon: 'assets/images/time.svg'
    },
    // {
    //   title: 'Wallet',
    //   subtitle: 'Balance',
    //   url: '/dashboard',
    //   icon: 'assets/images/wallet.svg'
    // },
  ];

  constructor() { }

  ngOnInit() {
  }

}
