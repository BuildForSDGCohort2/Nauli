import { Injectable } from '@angular/core';
import { Observable, from, BehaviorSubject } from 'rxjs';
import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CacheService } from './cache.service';
import { Router } from '@angular/router';
import { IUser, UserLogin, UserRegister } from '../models/user';
// import { auth } from 'firebase/app';
import * as jwt_decode from 'jwt-decode';



declare var gapi: any;

@Injectable({
  providedIn: 'root'
})
export class AuthService extends CacheService {

  private readonly USER_DETAILS = 'jnNoe9J0DGDGHD4JFO]CE3F4WR7';
  private readonly NONCE = 'GFGGF]CE3F4DFSDFGDHDHTHWR7';
  private apiUrl = environment.apiURL;

  private readonly JWT_TOKEN = 'jnNoe9J04JFO]CE3F4WR7';
  private readonly REFRESH_TOKEN = 'lMOJ090fk0f-03f74f4';

  results: any;

  public currentUser: Observable<IUser>;
  private userSubject: BehaviorSubject<IUser>;

  constructor(private http: HttpClient, private router: Router) {
    super();
    this.userSubject = new BehaviorSubject<IUser>(null);
    this.currentUser = this.userSubject.asObservable();
  }

  login(data: UserLogin): Observable<any> {
    return this.http.post<any>(`${environment.apiURL}/user/token/`, data)
      .pipe(map((tokens) => {
        console.log('Login response ', tokens);
        if (tokens) {
            const user = this.doUserLogin(tokens);
            return user;
          }
        }),
      );
  }

  logout(): void {
    this.removeItem(this.REFRESH_TOKEN);
    this.removeItem(this.JWT_TOKEN);
    this.userSubject.next(null);
    this.router.navigate(['/auth/login']);
    console.log('Logged out');
  }

  register(credentials: UserRegister): Observable<any>  {
    console.log('Credentials ', credentials);
    return this.http.post<any>(`${this.apiUrl}/user/register/`, credentials)
    .pipe(
        map((response) => {
          console.log(response);
          this.router.navigate(['/auth/login']);
        })
      );
  }

  getAllUser(): Observable<any>  {
    console.log('Credentials ');
    return this.http.get<any>(`${this.apiUrl}/user/register/`)
    .pipe(
        map((response) => {
          console.log(response);
        })
      );
  }

  /** Returns current user details */
  get user(): IUser {
    const jwt: string = this.getItem(this.JWT_TOKEN);
    if (!!jwt) {
      const user: IUser = jwt_decode(jwt);
      return user;
   } else {
     return null;
   }
  }

  /**
   * Saves logged in user details required for user/role-based data customization
   */
  private doUserLogin(tokens): IUser {
    this.setItem(this.JWT_TOKEN, tokens.access);
    this.setItem(this.REFRESH_TOKEN, tokens.refresh);
    const user: IUser = jwt_decode(tokens.access);
    this.routeBasedRoles(user.role);
    console.log('Logged in user details are: ', user);
    this.userSubject.next(user);
    return user;
  }

  /** Returns boolean based on whether current user has permission given allowed roles */
  public roleMatch(allowedRoles): boolean {
    let isMatch = false;
    const userRole: string = this.user.role;
    allowedRoles.forEach((expectedRole) => {
      if (userRole === expectedRole) {
        isMatch = true;
        return false;
      }
    });
    return isMatch;
  }

  routeBasedRoles(role): void {
    if (role === 'Passenger') {
      this.router.navigate(['/passenger']);
    } else if (role === 'Driver' || role === 'Tout') {
      this.router.navigate(['/staff']);
    }
  }

  get token() {
    return this.getItem(this.JWT_TOKEN);
  }

}
