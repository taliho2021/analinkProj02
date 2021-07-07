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

@Injectable({
  providedIn: 'root'
})
export class AuthService {

<<<<<<< HEAD
  API_URL: string = 'http://localhost:3000';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};

  constructor(private httpClient: HttpClient,public router: Router){}

  register(user: User): Observable<any> {

    return this.httpClient.post(`${this.API_URL}/users/register`, user).pipe(
        catchError(this.handleError)
    )
  }

  login(user: User) {
    return this.httpClient.post<any>(`${this.API_URL}/users/login`, user)
      .subscribe((res: any) => {
        localStorage.setItem('access_token', res.token)
        this.getUserProfile(res._id).subscribe((res) => {
          this.currentUser = res;
          this.router.navigate(['users/profile/' + res.msg._id]);
        })
      })
  }

  getAccessToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }

  logout() {
    if (localStorage.removeItem('access_token') == null) {
      this.router.navigate(['users/login']);
    }
  }

  getUserProfile(id): Observable<any> {
    return this.httpClient.get(`${this.API_URL}/users/profile/${id}`, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
=======

  constructor(public afAuth: AngularFireAuth, public router: Router) {
    this.afAuth.authState.subscribe(user => {
      if (user){
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null!);
      }
    })
   }

   async login(email: string, password: string) {
    var result = await this.afAuth.signInWithEmailAndPassword(email, password)
    this.router.navigate(['admin/list']);
}

async sendPasswordResetEmail(passwordResetEmail: string) {
  return await this.afAuth.sendPasswordResetEmail(passwordResetEmail);
}

async logout(){
  await this.afAuth.signOut();
  localStorage.removeItem('user');
  this.router.navigate(['admin/login']);
}

get isLoggedIn(): boolean {
  const  user  =  JSON.parse(localStorage.getItem('user')!);
  return  user  !==  null;
}

async  loginWithGoogle(){
  await  this.afAuth.signInWithPopup(new auth.GoogleAuthProvider())
  this.router.navigate(['admin/list']);
>>>>>>> f23bafa10934d1c6260374f6e7b5c08d5d2a45ba
}

}
