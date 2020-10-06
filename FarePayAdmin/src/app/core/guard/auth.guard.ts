import { Injectable} from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, CanActivateChild, } from '@angular/router';
import {  Observable } from 'rxjs';
import {  Route } from '@angular/compiler/src/core';
import { AuthService } from 'app/data/service/auth.service';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(
    protected authService: AuthService,
    protected router: Router,
  ) {}
  canLoad(route: Route): boolean | Observable < boolean > | Promise < boolean > {
    return this.checkLogin();
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable < boolean > | Promise < boolean > {
    
    return this.checkLogin(route);
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable < boolean > | Promise < boolean > {
    return this.checkLogin(childRoute);
  }

  protected checkLogin(route?: ActivatedRouteSnapshot) {
    let roleMatch = true;
    const currentUser = this.authService.user;
    console.log(currentUser);
    if (currentUser) {
      if (route) {
        const roles = route.data.roles;
        if (roles) {
          roleMatch = this.authService.roleMatch(roles);
          if (!roleMatch) {
            this.router.navigate(['/auth/login']);
            console.log(`Unauthorised`);
            return false;
          }
        }
        return true;
      }
    } else if (!currentUser) {
      console.log(`Unauthenticated`);
      this.router.navigate(['/login']);
      return false;
    }

  }
}
