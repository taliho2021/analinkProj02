import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Country } from '../models/country';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  COUNTRY_DATA: any =[]

  constructor(private http: HttpClient) { }

  getCountries(): Observable<Country> {
    return this.http.get<Country>('assets/data/countries.json')
     .pipe(
       retry(2),
       catchError(this.handleError)
     )
  }

  getStates(){
    return this.http.get('assets/data/states.json');
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
