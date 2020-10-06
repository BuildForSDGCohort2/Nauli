import { Component, OnInit } from '@angular/core';
import { PassengersService } from 'app/data/service/passengers.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Utils } from '@shared/_helpers/utils';

@Component({
  selector: 'app-passenger-list',
  templateUrl: './passenger-list.component.html',
  styleUrls: ['./passenger-list.component.scss']
})


export class PassengerListComponent implements OnInit {
  passengers: any[];
  filteredPassengers: any[];
  searchControl: FormControl = new FormControl();

  constructor(
    private _paxService: PassengersService
  ) { }

  ngOnInit(): void {
    this.getPassengers();
    this.searchControl.valueChanges
    .pipe(debounceTime(200))
    .subscribe((value) => {
      this.filteredPassengers = Utils.filterData(this.passengers, value);
    });
  }

  getPassengers = () => {
    this._paxService.getPassengers().subscribe(
      (res: any[])=> {
        console.log('PASSENGER LIST: ', res);
        this.passengers = res;
        this.filteredPassengers = [...this.passengers];

      },
      (err) => console.log('Passenger list error: ', err));
  }

}
