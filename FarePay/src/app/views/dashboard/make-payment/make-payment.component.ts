import { TripsService } from './../../../shared/services/trips.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { DataLayerService } from 'src/app/shared/services/data-layer.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IUser } from 'src/app/shared/inmemory-db/users';
import { VehicleService } from 'src/app/shared/services/vehicle.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-make-payment',
  templateUrl: './make-payment.component.html',
  styleUrls: ['./make-payment.component.scss']
})
export class MakePaymentComponent implements OnInit {

  vehicleId: string;
  phone: string;
  seatNo: string;
  buttonDisabled = false;

  user;
  userID: any;
  trip: any;
  loading = false;
  loadingSTK = false;
  passengerTripID: any;
  waitForPayment = false;


  form: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
    private _auth: AuthService,
    private _payService: DataLayerService,
    private _vehicleService: VehicleService,
    private tripService: TripsService
  ) { }

  ngOnInit() {
    this.vehicleId = this._route.snapshot.params.vehicleId;
    this.seatNo = this._route.snapshot.params.seatNo;
    this.getTrip(this.vehicleId);
    this.user = this._auth.user;
    if (!this._auth.user) {
      const phone = '254712224283';
      this.buildForm();
    } else  {
      console.log('Active user is ', this._auth.user);
      this.phone = `254${this._auth.user.phone.slice(1, )}`;
      this.buildForm(this.phone);
    }
  }


  requestSTK = () => {
    this.buttonDisabled = true;
    this.loadingSTK = true;

    this.phone = this.form.value.phone;
    const userPhone = `0${this.phone.slice(3, )}`;
    localStorage.setItem('UserPhone', userPhone);
    const data = {
      vehicleReg: this.trip.vehicle.regNo,
      seatNo: this.seatNo,
      phone: this.phone
    };

    this.tripService.stkPush(data).subscribe(
      (res: any) => {
        console.log(res);
        this.buttonDisabled = false;
        this.loadingSTK = false;
        this.waitForPayment = true;
        this.phone = `0${this.phone.slice(1, )}`;
        console.log(res);
        this.passengerTripID = res.message;
        // })
      }, (err) => {
        console.log('STK Push error: ', err);
        this.buttonDisabled = false;
        this.loading = false;
      }
    );
    setTimeout(() => {
      this.phone = `0${this.phone.slice(3, )}`;
      this._router.navigate([`/passenger/receipt/${this.passengerTripID}`]);
    }, 20000);
  }

  buildForm = (phone: string = '') => {
    this.form = this._fb.group({
      phone: [!!phone ? phone : '', [Validators.required, Validators.pattern('[0-9]*')]],
    });
  }

  getTrip(vehicleId) {
    this.loading = true;
    this.trip = this._vehicleService.getTripbyVehicleID(vehicleId).subscribe(
      (res: any) => {
        this.trip = res;
        this.loading = false;
      }, (err) => {
        console.log('Failed to get trip');
        this.loading = false;
      }
    );
    console.log(this.trip);
  }



}
