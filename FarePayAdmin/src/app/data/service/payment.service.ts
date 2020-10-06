import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env';
import { AuthService } from 'app/data/service/auth.service';
import { Role } from 'app/data/schema/Role';


@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  env = environment;

  constructor(
    private http: HttpClient,
    private _auth: AuthService
  ) { }

  paymentsList() {
    if (this._auth.user.role === Role.SaccoAdmin) {
      return this.http.get(`${environment.apiUrl}/payments/?sacco=${this._auth.user.saccoId}`);
    }
    return this.http.get(`${environment.apiUrl}/payments/`);
    // return this.http.get(`${environment.apiUrl}/payments/create/`);
  }

  paymentsSpecific(id) {
    return this.http.get<any>(`${environment.apiUrl}/payments/retrieve/${id}/`);
  }
}
