import { Component, OnInit } from '@angular/core';
import { MyErrorStateMatcher } from '@shared/_helpers/error-state-matcher.matcher';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { VehiclesService } from 'app/data/service/vehicles.service';
import { AuthService } from 'app/data/service/auth.service';
import { Role } from 'app/data/schema/Role';
import { first } from 'rxjs/operators';
import { NotifierService } from 'angular-notifier';
import { TripsService } from 'app/data/service/trips.service';

@Component({
  selector: 'app-vehicle-add',
  templateUrl: './vehicle-add.component.html',
  styles: [
  ]
})
export class VehicleAddComponent implements OnInit {

  form: FormGroup;
  loading: boolean;
  matcher = new MyErrorStateMatcher();
  owners: any[];
  drivers: any[];
  touts: any[];
  routes: any[];
  vehicleTypes: any[];
  vehicle: any;
  vehicleId: string;

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _route: ActivatedRoute,
    private _usersService: AuthService,
    private _vehicleService: VehiclesService,
    private _tripsService: TripsService,
    private _notifier: NotifierService
  ) { }

  ngOnInit(): void {
    this.vehicleId = this._route.snapshot.params['id'];
    this.buildForm();

    if (this.vehicleId) {
      this.getVehicle(this.vehicleId);
    }
    this.getOwners();
    this.getDrivers();
    this.getTouts();
    this.getVehicleTypes();
    this.getRoutes();
  }

  buildForm = (i: any = {}) => {
    this.form = this._fb.group({
      sacco: [this._usersService.user.saccoId],
      regNo: [i.regNo ? i.regNo : '', Validators.required],
      tlb: [i.tlb ? i.tlb : ''],
      owner: [i.owner ? i.owner.id : '', Validators.required],
      driver: [i.driver ? i.driver.id : ''],
      tout: [i.tout ? i.tout.id : ''],
      vehicleType: [i.vehicleType ? i.vehicleType.id : '', Validators.required],
      routes: [i.routes ? i.routes.id : ''],

    })
  }

  get uForm() {
    return this.form.controls;
  }


  getOwners = (): void => {
    this._usersService.getUsers(Role.Owner).subscribe(
      (res: any[]) => this.owners = res)
  }


  getVehicleTypes = (): void => {
    this._vehicleService.getVehicleTypes().subscribe(
      (res: any[]) => {
        console.log('vehicleTypes: ', res);
        this.vehicleTypes = res
      })
  }

  getRoutes = (): void => {
    this._tripsService.getRoutes().subscribe(
      (res: any[]) => {
        console.log('Routes: ', res);
        this.routes = res
      })
  }

  getDrivers = (): void => {
    this._usersService.getUsers(Role.Driver).subscribe(
      (res: any[]) => this.drivers = res)
  }

  getTouts = (): void => {
    this._usersService.getUsers(Role.Tout).subscribe(
      (res: any[]) => this.touts = res)
  }

  getVehicle = (id):void => {
    this._vehicleService.getVehicleDetail(id).subscribe(
      (res: any) => {
        console.log("Edit Vehicle: ", res)
        this.vehicle = res;
        this.buildForm(this.vehicle);
      }, (err) => console.log('Vehicle edit error: ', err)
    );
  }

  


  
  register = () => {
    if (this.form.invalid) {
      return;
    }
    this.loading = true;
    const form = this.form.value;
  
    if (this.vehicleId) {
      this.editVehicle(form, this.vehicleId);
    } else {
      this.postVehicle(form);
    }
  }



  postVehicle = (form): void => {
    this._vehicleService.postVehicle(form)
    .pipe(first())
    .subscribe(
      (data) => {
        console.log("Vehicle created as -", data);
        this.loading = false;
        this.showNotification( 'success', 'Vehicle added successfully' );
        // this._router.navigate(['/dashboard']);
      },
      (err) => {
        console.log("Vehicle Post Error-", err.error);
        let error: string = '';
        for (const key in err.error) {
          if (key === 'tout') {
            error += 'Tout already assigned vehicle!'
          } 
          if (key === 'driver') {
            error += 'Driver already assigned vehicle!'
          }
        }
        this.loading = false;
        this.showNotification( 'error', `Post failed. ${error}` );
      }
    );
  }

  editVehicle = (form, typeId): void => {
    this._vehicleService.editVehicle(form, typeId)
    .pipe(first())
    .subscribe(
      (data) => {
        console.log("Vehicle updated as -", data);
        this.loading = false;
        this.showNotification( 'success', 'Update successfull' );

        // this._router.navigate(['/dashboard']);
      },
      (err) => {
        console.log("Vehicle Edit Error-", err.error);
        let error: string = '';
        for (const key in err.error) {
          if (key === 'tout') {
            error += 'Tout already assigned vehicle!'
          } 
          if (key === 'driver') {
            error += 'Driver already assigned vehicle!'
          }
        }
        this.loading = false;
        this.showNotification( 'error', `Edit failed. ${error}` );
      }
    );
  }

  public showNotification( type: string, message: string ): void {
		this._notifier.notify( type, message );
	}

}
