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
  importers: Importer[]=[]
  API_URL: string ='http://localhost:3000';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  redirectUrl:string =''

  constructor(private http: HttpClient,public router: Router) { }

  getImporters():Observable<Importer[]>  {
    return this.http.get<Importer[]>(`${this.API_URL}/importers`)
    .pipe(
      catchError(this.handleError)
    )
  }

  addImporter(importer:Importer){
    return this.http.post<Importer>(`${this.API_URL}/importers`, importer)
    .pipe(
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


}
