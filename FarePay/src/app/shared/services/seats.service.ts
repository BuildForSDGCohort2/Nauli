import { Injectable } from '@angular/core';
import { Observable, from, BehaviorSubject } from 'rxjs';
import { environment } from './../../../environments/environment.prod';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CacheService } from './cache.service';
import { Router } from '@angular/router';
import { VehicleTrip, PassengerTrip } from '../models/trips';

@Injectable({
  providedIn: 'root'
})
export class SeatsService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  getVehicleTripSeats(id: any): Observable<any> {
    return this.http.get<any>(`${environment.apiURL}/seats/vehicletrip/${id}`)
      .pipe(map((trips) => {
        console.log('Seats response ', trips);
        if (trips) {
            // const user = this.doUserLogin(tokens);
            return trips;
          }
        }),
      );
  }

  createVehicleTripSeats(data): Observable<any> {
    return this.http.post<any>(`${environment.apiURL}/seats/list`, data)
      .pipe(map((trips) => {
        console.log('Seats response ', trips);
        if (trips) {
            // const user = this.doUserLogin(tokens);
            return trips;
          }
        }),
      );
  }

  updateVehicleTripSeat(data, id): Observable<any> {
    return this.http.post<any>(`${environment.apiURL}/seats/retrieve/${id}`, data)
      .pipe(map((trips) => {
        console.log('Seats response ', trips);
        if (trips) {
            // const user = this.doUserLogin(tokens);
            return trips;
          }
        }),
      );
  }


  getPassengers() {
    return this.http.get(`${environment.apiURL}/passengertrip/list`);
  }

}
