import { Component, OnInit } from '@angular/core';
import { VehiclesService } from 'app/data/service/vehicles.service';

@Component({
  selector: 'app-vehicle-type-list',
  templateUrl: './vehicle-type-list.component.html',
  styles: [
  ]
})
export class VehicleTypeListComponent implements OnInit {

  vehicleTypes: any[];

  constructor(
    private _vehicleService: VehiclesService
  ) { }


  ngOnInit(): void {
    this.getVehicleTypes();
  }

  getVehicleTypes = () => {
    this._vehicleService.getVehicleTypes().subscribe(
      (res: any[])=> {
        console.log('VEHICLE TYPE LIST: ', res);
        this.vehicleTypes = res
      },
      (err) => console.log('Vehicle type list error: ', err));
  }

  delete = (id) => {
    this._vehicleService.deleteVehicleType(id).subscribe(
      res => {
        console.log('Vehicle with id ${id} deleted successfully =>', res);
        this.getVehicleTypes();
      }, err => console.log('Delete vehicle error: ', err)
    )
  }

}
