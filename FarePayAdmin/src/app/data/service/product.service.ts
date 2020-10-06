import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  env = environment;
  
  constructor(
    private http: HttpClient
  ) { }

  getTrips() {
    return this.http.get(`${environment.apiUrl}/vehicletrip/list/`);
  }

  getUsers() {
    return this.http.get('api/users');
  }

  // getPayments() {
  //   return this.http.get('api/payments');
  // }

}
