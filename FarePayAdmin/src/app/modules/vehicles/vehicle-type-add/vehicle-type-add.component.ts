import { Component, OnInit } from '@angular/core';
import { MyErrorStateMatcher } from '@shared/_helpers/error-state-matcher.matcher';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VehiclesService } from 'app/data/service/vehicles.service';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-vehicle-type-add',
  templateUrl: './vehicle-type-add.component.html',
  styles: [
  ]
})
export class VehicleTypeAddComponent implements OnInit {

  form: FormGroup;
  loading: boolean;
  matcher = new MyErrorStateMatcher();

  typeId: string;
  vehicleType: any;

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _route: ActivatedRoute,
    private _notifier: NotifierService,

    private _vehicleService: VehiclesService
  ) { }

  ngOnInit(): void {
    this.typeId = this._route.snapshot.params['id'];
    if (this.typeId) {
      this.getVehicleType(this.typeId);
    }
    this.buildForm();
  }

  buildForm = (i: any = {}) => {
    this.form = this._fb.group({
      name: [i.name ? i.name : '', Validators.required],
      seats_no: [i.seats_no ? i.seats_no : '', Validators.required],
      driver_seat_no: [i.driver_seat_no ? i.driver_seat_no : '', Validators.required],
      tout_seat_no: [i.tout_seat_no ? i.tout_seat_no : ''],
    })
  }

  get uForm() {
    return this.form.controls;
  }



  register = () => {
    if (this.form.invalid) {
      return;
    }
    this.loading = true;
    const form = this.form.value;
  
    if (this.typeId) {
      this.editVehicleType(form, this.typeId);
    } else {
      this.postVehicleType(form);
    }
  }

  postVehicleType = (form): void => {
    this._vehicleService.postVehicleType(form)
    .pipe(first())
    .subscribe(
      (data) => {
        console.log("Vehicle type created as -", data);
        this.loading = false;
        this.showNotification( 'success', 'Vehicle type successfully' );
        // this._router.navigate(['/dashboard']);
      },
      (error) => {
        this.loading = false;
        this.showNotification( 'error', `Post failed. ${error}` );
        console.log("Vehicle Type Post Error-", error);
      }
    );
  }

  editVehicleType = (form, typeId): void => {
    this._vehicleService.editVehicleType(form, typeId)
    .pipe(first())
    .subscribe(
      (data) => {
        console.log("Vehicle type updated as -", data);
        this.loading = false;
        this.showNotification( 'success', 'Update successfull' );

        // this._router.navigate(['/dashboard']);
      },
      (error) => {
        this.loading = false;
        this.showNotification( 'error', error );
        console.log("Vehicle Type Edit Error-", error);
      }
    );
  }

  getVehicleType = (id):void => {
    this._vehicleService.getVehicleTypeDetail(id).subscribe(
      (res: any) => {
        console.log("Edit Vehicle: ", res)
        this.vehicleType = res;
        this.buildForm(this.vehicleType);
      }, (err) => console.log('Vehicle edit error: ', err)
    );
  }

  public showNotification( type: string, message: string ): void {
		this._notifier.notify( type, message );
	}

}
