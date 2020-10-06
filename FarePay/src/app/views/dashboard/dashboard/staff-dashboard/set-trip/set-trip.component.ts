import { EditTrips } from './../../../../../shared/interfaces/trips';
import { AuthService } from './../../../../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { DataLayerService } from '../../../../../shared/services/data-layer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Trips } from '../../../../../shared/interfaces/trips';
import { VehicleService } from './../../../../../shared/services/vehicle.service';
import { RoutesService } from './../../../../../shared/services/routes.service';
import { Utils } from './../../../../../shared/utils';
import { TripsService } from './../../../../../shared/services/trips.service';
import {Location} from '@angular/common';

export function MaxMinIfValidator(predicate) {
  return (formControl => {
    if (!formControl.parent) {
      return null;
    }
    if (predicate()) {
      return Validators.max(predicate.maxRate), Validators.min(predicate.minRate);
    }
    return null;
  });
}

@Component({
  selector: 'app-set-trip',
  templateUrl: './set-trip.component.html',
  styleUrls: ['./set-trip.component.scss']
})
export class SetTripComponent implements OnInit {

  locations = [
    {name: 'Thika'},
    {name: 'Kirinyaga'},
    {name: 'Murang\'a'},
    {name: 'Eldoret'},
    {name: 'Nyahururu'},
    {name: 'Kajiado'},
    {name: 'Isiolo'},
    {name: 'Kitale'},
    {name: 'Kisumu'},
    {name: 'Kisii'},
    {name: 'Mombasa'},
  ];

  numPlates = [
    {name: 'KAR 432R'},
    {name: 'KBZ 332Z'},
    {name: 'KCD 152R'},
    {name: 'KCE 434A'},
    {name: 'KCF 432L'},
    {name: 'KCM 345W'},
    {name: 'KBY 987T'},
    {name: 'KBT 123P'},
    {name: 'KBV 567K'},
    {name: 'KBG 567B'},
    {name: 'KAZ 908X'},
  ]
  tripForm: FormGroup;
  loading: boolean;
  id: string;
  error: string;
  trip: Trips;
  editTrip: EditTrips;
  trips = [];
  routes = [];
  maxRate: number;
  minRate: number;
  predicate = {}; 
  sacco: any;
  driver: any;
  tout: any;
  vehicle: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dl: DataLayerService,
    private fb: FormBuilder,
    private auth: AuthService,
    private vehicleService: VehicleService,
    private routesService: RoutesService,
    private tripService: TripsService,
    private location: Location
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.getTrip(this.id);
    }
    // this.getAppointment(this.id);
    this.buildForm();
    this.getVehicleData();
  }

  buildForm(i: any = {}) {
    let start: any = {};
    const now = new Date()
    if (i.time) {
      start.hr = parseInt(i.time.split(':')[0]);
      start.min = parseInt(i.time.split(':')[1]);
    }
    this.tripForm = this.fb.group({


      starting_from: [i.starting_from ? i.starting_from : '', Validators.required],
      ending_at: [i.ending_at ? i.ending_at : '', Validators.required],
      price: [i.price ? i.price : '', Validators.required],
      starting_time: [i.starting_time ? i.starting_time : Utils.getNgbTimeNow()],
      ending_time: [i.ending_time ? i.ending_time : Utils.getNgbTimeNow()],
      numPlate: [i.numPlate ? '' : '', Validators.required],

    });
  }

  get f() {
    return this.tripForm.controls;
  }

  requiredValidator = () => {
    return MaxMinIfValidator(() => !!this.predicate);
  }


  getTrip(id) {
    this.tripService.getSingleVehicleTrip(id).subscribe((resp) => {
      this.getVehicleData();
      resp.starting_time = Utils.dateToNgbDate(resp.starting_time);
      this.trips = resp;
      console.log('vehicle trip to edit: ',  this.trips);
      this.buildForm(this.trips);

    }, error => {
      console.log(error);
    });
  }

  getVehicleData() {
    const user = this.auth.user;
    console.log(user)
    const data = {
      driver: '',
      tout: user.id,
      sacco: user['saccoId']
    };
    this.vehicleService.searchVehicle(data).subscribe((resp) => {
      console.log('ROUTES IS: ', resp);

      const routeID = resp[0].routes_id;
      this.vehicle = resp[0].id;
      this.driver = resp[0].driver_id;
      this.tout = resp[0].tout_id;
      this.sacco = resp[0].sacco;
      this.routesService.getSingleRoute(routeID).subscribe((res) => {
        this.routes.push(res.starting_from);
        this.routes.push(res.ending_at);
        this.maxRate = parseInt(res.maxRate, 10);
        this.minRate = parseInt(res.minRate, 10);

      });
      // this.routes.splice(1, 1);
      this.tripForm.patchValue({
        numPlate: resp[0].regNo
      });

      this.tripForm.get('price')
      .setValidators([
        (control: AbstractControl) => Validators.max(this.maxRate)(control),
        (control: AbstractControl) => Validators.min(this.minRate)(control)
      ]);
      this.tripForm.get('price').updateValueAndValidity();

    });
  }

  saveTrip() {

    if (this.tripForm.invalid) {
      console.log('error')
      return;
    }
    console.log(this.tripForm.value);

    const trips = this.tripForm.value;
    delete trips.numPlate;
    trips.driver = this.driver;
    trips.sacco = parseInt(this.auth.user.saccoId);
    trips.tout = this.tout;
    trips.vehicle = this.vehicle;
    trips.starting_time = Utils.ngbDateToDate(this.tripForm.value.starting_time);

    trips.max_rate = trips.price;


    if (this.id) {
      if (this.tripForm.value.ending_time) {
        trips.ending_time = Utils.ngbDateToDate(this.tripForm.value.ending_time);
      }
      this.tripService.editVehicleTrip(trips, this.id).subscribe((resp) => {
        const ID = resp.id;
        this.router.navigateByUrl('/dashboard');
      }, error => {
        console.error(error);
      });
    } else {
      delete trips.ending_time;
      this.tripService.registerVehicleTrip(trips).subscribe((resp) => {
        console.log(resp);
        const ID = resp.id;
        this.router.navigateByUrl('/map/' + ID);
      }, error => {
        console.error(error);
      });
    }
  }


}
