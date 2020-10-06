import { Component, OnInit, Input } from '@angular/core';
import { TripsService } from 'app/data/service/trips.service';
import { NotifierService } from 'angular-notifier';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Utils } from '@shared/_helpers/utils';

@Component({
  selector: 'app-trips-list',
  templateUrl: './trips-list.component.html',
})


export class TripsListComponent implements OnInit {

  trips: any[];
  filteredTrips: any[];
  searchControl: FormControl = new FormControl();

  constructor(
    private _tripsService: TripsService,
    private _notifier: NotifierService
  ) { }

  ngOnInit(): void {
    this.getTrips();
    this.searchControl.valueChanges
    .pipe(debounceTime(200))
    .subscribe((value) => {
      this.filteredTrips = Utils.filterData(this.trips, value);
    });
  }


  getTrips = () => {
    this._tripsService.getTrips().subscribe(
      (res: any[])=> {
        console.log('TRIPS LIST: ', res);
        this.trips = res;
        this.filteredTrips = [...this.trips];
      },
      (err) => console.log('Trips list error: ', err));
  }


  public showNotification( type: string, message: string ): void {
		this._notifier.notify( type, message );
	}

}
