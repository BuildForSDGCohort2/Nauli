import { Injectable } from '@angular/core';
import { Observable, from, BehaviorSubject } from 'rxjs';
import { environment } from './../../../environments/environment.prod';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CacheService } from './cache.service';
import { Router } from '@angular/router';
import { Vehicle } from '../models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  getSingleVehicle(id: number): Observable<any> {
    return this.http.get<any>(`${environment.apiURL}/vehicle/retrieve/${id}/`)
      .pipe(map((vehicle) => {
        console.log('vehicle response ', vehicle);
        if (vehicle) {
            // const user = this.doUserLogin(tokens);
            return vehicle;
          }
        }),
      );
  }

  searchVehicle(data ): Observable<any> {
    let params;
    console.log(data);
    console.log(data.to);
    if (!!data) {
      params = new HttpParams()
                    .set('sacco', data.sacco)
                    // .set('driver', data.driver)
                    .set('tout', data.tout);
    }
    return this.http.get<any>(`${environment.apiURL}/vehicle/list/`, {params})
      .pipe(map((vehicle) => {
        console.log('vehicle response ', vehicle);
        if (vehicle) {
            // const user = this.doUserLogin(tokens);
            return vehicle;
          }
        }),
      );
  }


  getTripbyVehicleID(vehicle) {
    const params = new HttpParams().set('vehicle', vehicle);
    return this.http.get<any>(`${environment.apiURL}/vehicletrip/vehicle/`, {params})
      .pipe(map((trips) => {
        console.log('trips response ', trips);
        return trips;
      })
    );
  }




}
