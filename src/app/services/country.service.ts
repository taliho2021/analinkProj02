import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Country } from '../models/country';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  data_URL: string ='assets/data/countries.json'
  headers = new HttpHeaders().set('Content-Type', 'application/json');

    constructor(private http: HttpClient) { }

  getCountries() {
    return this.http.get<Country[]>(this.data_URL)
     .pipe(
       retry(2),
       catchError(this.handleError)
     )
  }

  handleError(error: { error: { message: string; }; status: any; message: any; } ){
    let errorMessage ='';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
