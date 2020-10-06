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
export class TripsService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  getAllVehicleTrips(): Observable<any> {
    return this.http.get<any>(`${environment.apiURL}/vehicletrip/list/`)
      .pipe(map((trips) => {
        console.log('Login response ', trips);
        if (trips) {
            // const user = this.doUserLogin(tokens);
            return trips;
          }
        }),
      );
  }

  getSingleVehicleTrip(id: any): Observable<any> {
    return this.http.get<any>(`${environment.apiURL}/vehicletrip/retrieve/${id}`)
      .pipe(map((trips) => {
        console.log('trip response ', trips);
        if (trips) {
            // const user = this.doUserLogin(tokens);
            return trips;
          }
        }),
      );
  }

  searchVehicleTrips(data
    ): Observable<any> {
    let params;
    console.log(data);
    console.log(data.to);
    if (!!data) {
      params = new HttpParams()
                    .set('starting_from', data.from)
                    .set('ending_at', data.to)
                    .set('starting_time', data.time);
    }
    return this.http.get<any>(`${environment.apiURL}/vehicletrip/list/`, {params})
      .pipe(map((trips) => {
        console.log('Login response ', trips);
        if (trips) {
            // const user = this.doUserLogin(tokens);
            return trips;
          }
        }),
      );
  }


  searchVehicleTripsByTout(toutId
    ): Observable<any> {
    let params;
 
    if (!!toutId) {
      params = new HttpParams()
                    .set('tout', toutId);
    }
    return this.http.get<any>(`${environment.apiURL}/vehicletrip/list/`, {params})
      .pipe(map((trips) => {
        console.log('Login response ', trips);
        if (trips) {
            // const user = this.doUserLogin(tokens);
            return trips;
          }
        }),
      );
  }

  registerVehicleTrip(data): Observable<any>  {
    console.log('Credentials ', data);
    return this.http.post<any>(`${environment.apiURL}/vehicletrip/create/`, data)
    .pipe(
        map((response) => {
          console.log(response);
          return response;
          // this.router.navigate(['/auth/login']);
        })
      );
  }

  editVehicleTrip(data, id): Observable<any>  {
    console.log('Credentials ', data);
    return this.http.patch<any>(`${environment.apiURL}/vehicletrip/update/${id}/`, data)
    .pipe(
        map((response) => {
          console.log(response);
          return response;
          // this.router.navigate(['/auth/login']);
        })
      );
  }

  getPassengerTrip(data): Observable<any>  {
    let params;
    params = new HttpParams()
                    .set('passenger_phone', data);
    return this.http.get<any>(`${environment.apiURL}/passengertrip/get/`, {params})
    .pipe(
        map((response) => {
          console.log(response);
          return response;
          // this.router.navigate(['/auth/login']);
        })
      );
  }

  getPassengersForSacco(sacco) {
    let params;
    params = new HttpParams()
                    .set('sacco', sacco);
    return this.http.get(`${environment.apiURL}/passengertrip/list/`, {params})
  }


  getPassengerTripByID(id): Observable<any>  {
    return this.http.get<any>(`${environment.apiURL}/passengertrip/retrieve/${id}`)
    .pipe(
        map((response) => {
          console.log(response);
          return response;
          // this.router.navigate(['/auth/login']);
        })
      );
  }

  createPayment(data):  Observable<any>  {
    console.log('Credentials ', data);
    return this.http.post<any>(`${environment.apiURL}/payments/`, data)
    .pipe(
        map((response) => {
          console.log(response);
          return response;
          // this.router.navigate(['/auth/login']);
        })
      );
    }

    getTripDetail(tripId) {
      return this.http.get<any>(`${environment.apiURL}/vehicletrip/retrieve/${tripId}`);
    }
  
  
    getTripsByPhone(phone) {
      return this.http.get(`${environment.apiURL}/vehicletrip/list/?phone=${phone}/`);
    }


    stkPush(data):  Observable<any>  {
      console.log('Credentials ', data);
      return this.http.post<any>(`${environment.apiURL}/mobile-money/online/lipa`, data)
      .pipe(
          map((response) => {
            console.log(response);
            return response;
            // this.router.navigate(['/auth/login']);
          })
        );
      }
}
