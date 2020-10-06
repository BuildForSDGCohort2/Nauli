import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env';
import { AuthService } from 'app/data/service/auth.service';
import { Role } from 'app/data/schema/Role';


@Injectable({
  providedIn: 'root'
})
export class TripsService {
  env = environment;

  constructor(
    private http: HttpClient,
    private _auth: AuthService
  ) { }


  getTrips() {
    if (this._auth.user.role === Role.SaccoAdmin) {
      return this.http.get(`${environment.apiUrl}/vehicletrip/list/?sacco=${this._auth.user.saccoId}`);
    }
    return this.http.get(`${environment.apiUrl}/vehicletrip/list/`);
  }


  getTripsByPhone(phone) {
    return this.http.get(`${environment.apiUrl}/vehicletrip/list/?phone=${phone}/`);
  }

  getTripsForSacco(phone) {
    return this.http.get(`${environment.apiUrl}/vehicletrip/list/?phone=${phone}/`);
  }


  getTripDetail(tripId) {
    return this.http.get<any>(`${environment.apiUrl}/vehicletrip/retrieve/${tripId}`);
  }


  getRoutes() {
    if (this._auth.user.role === Role.SaccoAdmin) {
      return this.http.get(`${environment.apiUrl}/routes/list/?sacco=${this._auth.user.saccoId}`);
    }
    return this.http.get(`${environment.apiUrl}/routes/list`);
  }
 
   
  getRouteDetail(id) {
    return this.http.get<any>(`${environment.apiUrl}/routes/retrieve/${id}`,);
  }

  postRoutes(data) {
    return this.http.post<any>(`${environment.apiUrl}/routes/list/`, data);
  }

  editRoutes(data, id) {
    return this.http.put<any>(`${environment.apiUrl}/routes/retrieve/${id}/`, data);
  }

  deleteRoutes(id) {
    return this.http.delete<any>(`${environment.apiUrl}/routes/retrieve/${id}/`);
  }

  



}

