import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env';
import { AuthService } from 'app/data/service/auth.service';
import { Role } from 'app/data/schema/Role';


@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  env = environment;

  constructor(
    private http: HttpClient,
    private _auth: AuthService

  ) { }


  postVehicle(data) {
    return this.http.post<any>(`${environment.apiUrl}/vehicle/create/`, data);
  }

  editVehicle(data, id) {
    return this.http.put<any>(`${environment.apiUrl}/vehicle/update/${id}/`, data);
  }

  deleteVehicle(id) {
    return this.http.delete<any>(`${environment.apiUrl}/vehicle/retrieve/${id}/`);
  }
  
  getVehicles() {
    if (this._auth.user.role === Role.SaccoAdmin) {
      return this.http.get(`${environment.apiUrl}/vehicle/list/?sacco=${this._auth.user.saccoId}`);
    }
    return this.http.get(`${environment.apiUrl}/vehicle/list`);
  }


  getVehicleDetail(id) {
    return this.http.get(`${environment.apiUrl}/vehicle/retrieve/${id}/`);
  }

 
  postVehicleType(data) {
    return this.http.post<any>(`${environment.apiUrl}/vtypes/list/`, data);
  }

  editVehicleType(data, id) {
    return this.http.put<any>(`${environment.apiUrl}/vtypes/retrieve/${id}/`, data);
  }

  deleteVehicleType(id) {
    return this.http.delete<any>(`${environment.apiUrl}/vtypes/retrieve/${id}/`);
  }

  getVehicleTypes() {
    return this.http.get(`${environment.apiUrl}/vtypes/list/`);
  }

  getVehicleTypeDetail(id) {
    return this.http.get(`${environment.apiUrl}/vtypes/retrieve/${id}/`);
  }

}
