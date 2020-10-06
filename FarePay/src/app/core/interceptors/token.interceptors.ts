/**
 * The Token Interceptor intercepts http requests from the application to add auth token 
 * to the Authorization header if the user is logged in allowing user to obtain just his/her data.
 */

import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../shared/services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(
        public authService: AuthService,
        ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        const isLoggedIn = !!this.authService.user && !!this.authService.token;
        const isApiUrl = request.url.startsWith(environment.apiURL);

        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: { Authorization: `Bearer ${this.authService.token}` }
            });
        }
        return next.handle(request);
    }
}
