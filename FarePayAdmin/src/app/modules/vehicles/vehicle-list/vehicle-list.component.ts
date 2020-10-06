import { Component, OnInit } from '@angular/core';
import { VehiclesService } from 'app/data/service/vehicles.service';
import { NotifierService } from 'angular-notifier';
import { AuthService } from 'app/data/service/auth.service';
import { Role } from 'app/data/schema/Role';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Utils } from '@shared/_helpers/utils';



@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styles: [
  ]
})
export class VehicleListComponent implements OnInit {

  vehicles: any[];
  filteredVehicles: any[];
  isSaccoAdmin: boolean;
  searchControl: FormControl = new FormControl();

  constructor(
    private _vehicleService: VehiclesService,
    public auth: AuthService,
    private _notifier: NotifierService
  ) { }


  ngOnInit(): void {
      this.getVehicles();
      this.isSaccoAdmin =  this.auth.user.role === Role.SaccoAdmin;
      this.searchControl.valueChanges
      .pipe(debounceTime(200))
      .subscribe((value) => {
        this.filteredVehicles = Utils.filterData(this.vehicles, value);
      });
  }


  getVehicles = () => {
    this._vehicleService.getVehicles().subscribe(
      (res: any[])=> {
        console.log('VEHICLE LIST: ', res);
        this.vehicles = res
        this.filteredVehicles = [...this.vehicles];
      },
      (err) => console.log('Vehicle list error: ', err));
  }

  delete = (id) => {
    this._vehicleService.deleteVehicleType(id).subscribe(
      res => {
        console.log('Vehicle with id ${id} deleted successfully =>', res);
        this.showNotification( 'success', 'Vehicle deleted' );
        this.getVehicles();
      }, err => console.log('Delete vehicle error: ', err)
    )
  }


  public showNotification( type: string, message: string ): void {
		this._notifier.notify( type, message );
	}

}
