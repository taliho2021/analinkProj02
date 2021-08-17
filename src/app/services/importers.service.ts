import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Importer } from '../models/importer';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const API_URL ='http://localhost:3000/importers';
@Injectable({
  providedIn: 'root'
})
export class ImportersService {
  [x: string]: any;
  importers: Importer[]=[]

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  redirectUrl:string =''

  constructor(private http: HttpClient,public router: Router) { }

  getAll():Observable<Importer[]>  {
    return this.http.get<Importer[]>(API_URL)
    .pipe(
      catchError(this.handleError)
    )
  }

  getImporter(clientId: string): Observable<Importer> {
    const url = (`${API_URL}/${clientId}`)
    window.alert(url)
    return this.http.get<Importer>(url)
      .pipe(       
        catchError(this.handleError)
      )
  }

  create(userData: Importer){
    return this.http.post<Importer>(API_URL, userData)
    .pipe(
      catchError(this.handleError)
    )
  }

  update(clientId: any, importer:Importer): Observable<Importer>{
    return this.http.put<Importer>(`${API_URL}/${clientId}`, importer)
  }

  delete(clientId:any): Observable<Importer>{
    return this.http.delete<Importer>(API_URL)
  }

  deleteAll(): Observable<Importer> {
    return this.http.delete<Importer>(API_URL)
  }

  findByName(name:any) : Observable<Importer[]>{
    return this.http.get<Importer[]>(`${API_URL}?name=${name}`)
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
