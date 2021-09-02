import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

const API_URL ='http://localhost:3000/users';
@Injectable({
  providedIn: 'root'
})

export class AuthService {


constructor(public router: Router,
            private http: HttpClient) {

}

public isAuthenticated(): boolean {
  const  user  =  JSON.parse(localStorage.getItem('user')!);
  if (user && JSON.parse(user)){
    return true
  }
  return  false;
}

public setUserInfo(user:string) {
  localStorage.setItem('userInfo', JSON.stringify(user))
}

public validate(email:string, password:string) {
  return this.http.post(API_URL, {'username':email, 'pasword': password}).toPromise()
}
logout(){

}
}
