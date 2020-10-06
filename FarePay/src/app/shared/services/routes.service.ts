import { Injectable } from '@angular/core';
import { Observable, from, BehaviorSubject } from 'rxjs';
import { environment } from './../../../environments/environment.prod';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CacheService } from './cache.service';
import { Router } from '@angular/router';
import { Routes } from '../models/routes';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  getSingleRoute(id: number): Observable<any> {
    return this.http.get<any>(`${environment.apiURL}/routes/retrieve/${id}/`)
      .pipe(map((routes) => {
        console.log('routes response ', routes);
        if (routes) {
            // const user = this.doUserLogin(tokens);
            return routes;
          }
        }),
      );
  }
}
