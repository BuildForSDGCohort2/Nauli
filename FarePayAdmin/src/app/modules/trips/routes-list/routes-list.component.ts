import { Component, OnInit, Input } from '@angular/core';
import { TripsService } from 'app/data/service/trips.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-routes-list',
  templateUrl: './routes-list.component.html',
  styles: [
  ]
})
export class RoutesListComponent implements OnInit {

  routes: any[];


  constructor(
    private _tripsService: TripsService,
    private _notifier: NotifierService
  ) { }

  ngOnInit(): void {
    this.getRoutes();
  }


  getRoutes = () => {
    this._tripsService.getRoutes().subscribe(
      (res: any[])=> {
        console.log('ROUTES LIST: ', res);
        this.routes = res;
      },
      (err) => console.log('Routes list error: ', err));
  }

  delete = (id) => {
    this._tripsService.deleteRoutes(id).subscribe(
      res => {
        console.log('Vehicle with id ${id} deleted successfully =>', res);
        this.showNotification( 'success', 'Vehicle deleted' );
        this.getRoutes();
      }, err => console.log('Delete vehicle error: ', err)
    )
  }

  public showNotification( type: string, message: string ): void {
		this._notifier.notify( type, message );
	}

}
