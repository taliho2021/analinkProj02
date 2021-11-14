import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

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
  const  user  =  JSON.parse(localStorage.getItem('user')!);  // User's keyvalue 
  if (user && JSON.parse(user)){  // If the user param and the user.value in local storage are same
    return true
  }
  return  false;
}

// isAuthenticated() {
//   return this.http.get('/auth/isAuthenticated');
// }


// Called from login component to verify the email & password in DB.
public validate(email:string, password:string) {
  return this.http.post(API_URL+'/login', {'username':email, 'pasword': password}).toPromise()
}

//Once logged in set user info in local storage. Called from login component. 
// Key(userInfo), value(JSON.stringigy(user)) will be stored in local storage.
public setUserInfo(user:string) {
  localStorage.setItem('userInfo', JSON.stringify(user))
}

public logout(){
   window.alert('Logged out')
 }
}
