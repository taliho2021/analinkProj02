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

get isLoggedIn(): boolean {
  const  user  =  JSON.parse(localStorage.getItem('user')!);
  return  user  !==  null;
}

login(email:string, password:string): Observable<any>{
  return this.http.get(API_URL)

}

logout(){

}
}
