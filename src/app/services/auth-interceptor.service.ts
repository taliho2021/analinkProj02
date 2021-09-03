import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, filter, switchMap, take } from "rxjs/operators";

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    window.alert("Interception In Progress"); // Interception Stage
    const token: string = localStorage.getItem('token')!; // This retrieves a token from local storage
    req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });// This clones HttpRequest and Authorization header with Bearer token added
    req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
    req = req.clone({ headers: req.headers.set('Accept', 'application/json') });

    return next.handle(req)
        .pipe(
           catchError((error: HttpErrorResponse) => {
                // Catching Error Stage
                if (error && error.status === 401) {
                    console.log("ERROR 401 UNAUTHORIZED") // in case of an error response the error message is displayed
                }
                const err = error.error.message || error.statusText;
                return throwError(error); // any further errors are returned to frontend
           })
        );
  }
}
