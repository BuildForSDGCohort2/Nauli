import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  env = environment;
  
  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    return this.http.get(`${environment.apiUrl}/users/register`);
  }


}
