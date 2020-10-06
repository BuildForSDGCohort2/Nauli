import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-select-payment',
  templateUrl: './select-payment.component.html',
  styleUrls: ['./select-payment.component.scss']
})
export class SelectPaymentComponent implements OnInit {

  locations = [
    {name: 'MPESA'},
    // {name: 'CARD'},
    // {name: 'CASH'},
  ];

  seats = [
    {name: '2'},{name: '3'},{name: '5'},{name: '6'},{name: '7'},{name: '8'},{name: '9'},{name: '10'},{name: '11'},{name: '12'},{name: '13'},{name: '14'},{name: '15'}
  ];

  tripForm: FormGroup;
  vehicleId: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _route: ActivatedRoute
  ) { 
    this.vehicleId = this._route.snapshot.params['vehicleId'];
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(i: any = {}) {
    this.tripForm = this.fb.group({
      payment: [i.payment ? i.payment : '', Validators.required],
      seat: [i.seat ? i.seat : '', Validators.required],

    });
  }

  get f() {
    return this.tripForm.controls;
  }
  
  searchTrip() {
    const data = this.tripForm.value.payment;
    const seat =  this.tripForm.value.seat;
    if (data === 'MPESA') {
      this.router.navigate([`/pay/vehicle/${this.vehicleId}/seat/${seat}`]);
    } else if (data === 'CASH') {
      this.router.navigate(['/pay-tout']);
    }   
  }
}
