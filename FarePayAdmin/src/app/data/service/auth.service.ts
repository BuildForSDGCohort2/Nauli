import { Injectable } from '@angular/core';
import { CacheService } from 'app/data/service/cache.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { IUser } from '../inmemory_db/users';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { environment } from '@env';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends CacheService {
  apiUrl = environment.apiUrl;


  public currentUser: Observable<IUser>;
  private userSubject: BehaviorSubject<IUser>;
  private readonly JWT_TOKEN = 'jnNoe9J04JFO]CE3F4WR7';
  private readonly REFRESH_TOKEN = 'lMOJ090fk0f-03f74f4';

  results: any;
  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    super();
    this.userSubject = new BehaviorSubject<IUser>(null);
    this.currentUser = this.userSubject.asObservable();
  }

  getUsers(role?) {

    let params;
    console.log('This user is: ', this.user.saccoId);
    if (!!role) {
      params = new HttpParams()
      .set('sacco', this.user.saccoId)
      .set('role', role);
    } else {
      params = new HttpParams().set('sacco', this.user.saccoId);    }
    return this.http.get(`${environment.apiUrl}/user/list/`, {params});
  }

  getUsersAll() {
    return this.http.get(`${environment.apiUrl}/user/list/`)
  }



  loginUser(loginData) {
    console.log('User data ', loginData);
    return this.http.post<any>(`${environment.apiUrl}/user/token/`, loginData)
      .pipe(map((tokens) => {
        console.log('Login response ', tokens);
          if (tokens) {
            const user: IUser = this.doUserLogin(tokens);
            console.log('Logged in user is: ', user);
            return user;
          }
        }),
      );
  }

  logOut() {
    this.removeItem(this.REFRESH_TOKEN);
    this.removeItem(this.JWT_TOKEN);
    this.userSubject.next(null);
    this.router.navigate(['/auth/login']);
    console.log('Logged out');
  }

  signUp(userDetails) {
    return this.http.post<any>(`${this.apiUrl}/user/create/`, userDetails)
    .pipe(
        map((response) => {
          console.log(response);
          this.router.navigate(['/auth/login']);
        })
      );
    }

    createUser(userDetails) {
      return this.http.post<any>(`${this.apiUrl}/user/register/`, userDetails)
      .pipe(
          map((response) => {
            console.log(response);
          })
        );
      }
  // helper methods

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

    get token() {
      return this.getItem(this.JWT_TOKEN);
    }

}
