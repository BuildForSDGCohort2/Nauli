import { TripsDB } from './../inmemory-db/trips';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { IUser, UsersDB } from './../inmemory-db/users';
import { CacheService } from './cache.service';
import { Router } from '@angular/router';
import { Utils } from './../utils';

@Injectable({
  providedIn: 'root'
})
export class DataLayerService  extends CacheService {

  public currentUser: Observable<IUser>;
  private userSubject: BehaviorSubject<IUser>;
  private readonly USER_DETAILS = 'jnNoe9J0DGDGHD4JFO]CE3F4WR7';

  results: any;
  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    super();
    this.userSubject = new BehaviorSubject<IUser>(null);
    this.currentUser = this.userSubject.asObservable();
  }

  getUsers() {
    return this.http.get('api/users');
  }

  loginUser(credentials) {
    return this.doUserLogin(credentials);
  }

  logOut() {
    this.router.navigate(['/auth/login']);
    this.removeItem(this.USER_DETAILS);
    console.log('Logged out');
  }

  getWeekTrips() {
    return this.http.get('api/trips');
  }

  getSeats() {
    return this.http.get('api/seats');
  }

  editSeat(seat, id) {
    return this.http.put<any[]>('/api/seats/' + id, seat);
  }


  getAppointments() {
    return this.http.get('api/seats');
  }


  getNotes() {
    return this.http.get<any[]>('https://aarifu.herokuapp.com/api/records/');
  }

  getNotesById(note_id) {
    return this.http.get<any[]>(`https://aarifu.herokuapp.com/api/records/${note_id}/`);
  }

  postTrip(trip) {
    trip.id = Utils.genId();
    return this.http.post<any[]>('/api/trips/', trip);
  }

  editTrip(trip, id) {
    return this.http.put<any[]>('/api/trips/' + id, trip);
  }

  deleteTrip(id) {
    return this.http.delete<any[]>('/api/trips/' + id);
  }

  searchTrip(trip) {
    const tripe: any = TripsDB.trips.find(triper => triper.from === trip.from && triper.to === trip.to);
    return tripe;
  }

  getTrips() {
    return this.http.get<any[]>('/api/trips');
  }


  getTripByUserID(userID) {
      // return this.http.get<any[]>('/api/trips/' + id);
      const trip: any = TripsDB.trips.find(tripe => tripe.userID === userID);
      return trip;
  }

  getTrip(id) {
    // return this.http.get<any[]>('/api/trips/' + id);
    const trip: any = TripsDB.trips.find(tripe => tripe.id === id);
    console.log(trip);
    return trip;
}


  // helper methods

  /** Returns current user details */
  get user(): IUser {
    const userValue: IUser = this.getItem(this.USER_DETAILS);
    return userValue;
  }

  /**
   * Saves logged in user details required for user/role-based data customization
   */
  private doUserLogin({ phoneNumber, password }): boolean {
    const user: IUser = UsersDB.users.find(userr => userr.phone === phoneNumber);
    if ( password === user.password ) {
      this.userSubject.next(user);
      this.setItem(this.USER_DETAILS, user);
      return true;
    }
    return false;
  }


}
