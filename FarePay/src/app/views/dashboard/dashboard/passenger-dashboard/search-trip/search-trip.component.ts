import { EditTrips } from './../../../../../shared/interfaces/trips';
import { AuthService } from './../../../../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { DataLayerService } from '../../../../../shared/services/data-layer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Trips } from '../../../../../shared/interfaces/trips';
import { TripsService } from './../../../../../shared/services/trips.service';
import { VehicleService } from './../../../../../shared/services/vehicle.service';
import { VehicleTrip } from './../../../../../shared/models/trips';
import { Vehicle } from './../../../../../shared/models/vehicle';
import { Utils } from './../../../../../shared/utils';
@Component({
  selector: 'app-search-trip',
  templateUrl: './search-trip.component.html',
  styleUrls: ['./search-trip.component.scss']
})
export class SearchTripComponent implements OnInit {

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
    {name: 'Nakuru'},
    {name: 'Nairobi'},
    {name: 'Naivasha'},
    {name: 'Mombasa'}
  ];

  tripForm: FormGroup;
  loading: boolean;
  id: string;
  error: string;
  trip: Trips;
  editTrip: EditTrips;
  // trips: any;
  found: boolean;
  results: any;
  trips: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dl: DataLayerService,
    private fb: FormBuilder,
    private auth: AuthService,
    private tripService: TripsService,
    private vehicleService: VehicleService
  ) { }

  ngOnInit() {
    this.getTrips();
    this.buildForm();
  }

  buildForm(i: any = {}) {
    this.tripForm = this.fb.group({
      from: [i.from ? i.from : '', Validators.required],
      to: [i.to ? i.to : '', Validators.required],
      time: [i.time ? i.time : {hour: 12, minute: 30}],
    });
  }

  getTrips() {
    this.tripService.getAllVehicleTrips().subscribe((resp) => {
      this.trips = resp.filter(trip => !trip.ending_time);
      console.log(resp);
      this.found = true;
    }, error => {
      console.log(error);
    });
  }

  searchTrip() {
    // console.log(this.tripForm.value.time)
    const time = Utils.ngbDateToDate(this.tripForm.value.time);
    // console.log(time);
    const data = this.tripForm.value;
    data.time = time;
    this.tripService.searchVehicleTrips(data).subscribe((resp) => {
      console.log(resp);
    });
  }

  saveTrip() {
    this.loading = true;
    // stop here if form is invalid
    if (this.tripForm.invalid) {
      return;
    }
    console.log(this.tripForm.value);

    const trips = this.tripForm.value;
    delete trips.time;
    // trips.time  = trips.time.hour + ':' + trips.time.minute;


    this.results = this.dl.searchTrip(trips);
    console.log(this.results);
    if (this.results) {
      this.found = true;
    } else {
      this.found = false;
    }
    this.loading = false;


  }
  book(id) {
    this.router.navigateByUrl('/select-payment/' + id);
  }

}
