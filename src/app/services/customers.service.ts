import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  customers: Customer[] =[]
  data_URL: string ='assets/data/customers.json'
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  getCustomers() {
    return this.http.get<Customer[]>(this.data_URL)
      .pipe(
        catchError(this.handleError),
      );
  }

  getCustomer(i: number) {
    return this.http.get<Customer[]>(this.data_URL)
      .pipe(
        map(data => data.find(data => data.id)),
        catchError(this.handleError),
      )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
