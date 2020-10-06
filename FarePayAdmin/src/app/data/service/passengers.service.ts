import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env';
import { AuthService } from 'app/data/service/auth.service';
import { Role } from 'app/data/schema/Role';


@Injectable({
  providedIn: 'root'
})
export class PassengersService {


  env = environment;

  constructor(
    private http: HttpClient,
    private _auth: AuthService
  ) { }

  getPassengers() {
    if (this._auth.user.role === Role.SaccoAdmin) {
      return this.http.get(`${environment.apiUrl}/passengertrip/list/?sacco=${this._auth.user.saccoId}`);
    }
    return this.http.get(`${environment.apiUrl}/passengertrip/list`);
  }

  getPassengerDetail(id) {
    return this.http.get(`${environment.apiUrl}/passengertrip/retrieve/${id}/`);
  }
}
