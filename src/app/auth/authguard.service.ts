import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate{

  constructor(private authService: AuthService, private route: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.isAuthenticated().pipe(map((response: { authenticated: boolean}) => {
      if (response.authenticated) {
        return true;
      }
    this.route.navigate(['login'])
    return false
   }
  }  // canActivate(next:ActivatedRouteSnapshot,
  //   state:RouterStateSnapshot): Observable<boolean>{
  //    return true;
  // }

  // canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
  //   return this.authService.isAuthenticated().pipe(map((response: { authenticated: boolean}) => {
  //       if (response.authenticated) {
  //           return true;
  //       }
  //       this.router.navigate(['/login']);
  //       return false;
  //   }), catchError((error) => {
  //       this.router.navigate(['/login']);
  //       return of(false);
  //    }));
  //   }
  // }
  // Calling isAuthenticated() fxn.  Make use of the pipe and map operator to access the response.  Then
  // use the response to determine the user's authentication state. If the user is authenticated, return
  // true.  Otherwise, use the Router to redirect the user to the login page and return false.

}
