import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate{

  constructor(private authService: AuthService, private route: Router) { }
    canActivate() {
    if (this.authService.isAuthenticated()){
      return true
    };
    this.route.navigate(['login'])
    return false
  }


}
