import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Importer } from '../models/importer';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ImportersService {
  API_URL: string ='http://localhost:3000';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  redirectUrl:string =''

  constructor(private http: HttpClient,public router: Router) { }

  getImporters(importer: Importer):Observable<any>{
    return this.http.get(`${this.API_URL}/importers`).pipe(
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



  addImporter(){}
}
