import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Country } from '../models/country';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  data_URL: string ='assets/data/countries.json'
  // headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  getCountries() {
    return this.http.get<Country[]>(this.data_URL)
     .pipe(
       catchError(this.handleError)
     );
  }

  private handleError(error: HttpErrorResponse ){
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

// Create an Observable that will start listening to geolocation updates
// when a consumer subscribes.
const locations = new Observable((observer) => {
  let watchId: number;

  // Simple geolocation API check provides values to publish
  if ('geolocation' in navigator) {
    watchId = navigator.geolocation.watchPosition((position: GeolocationPosition) => {
      observer.next(position);
    }, (error: GeolocationPositionError) => {
      observer.error(error);
    });
  } else {
    observer.error('Geolocation not available');
  }

  // When the consumer unsubscribes, clean up data ready for next subscription.
  return {
    unsubscribe() {
      navigator.geolocation.clearWatch(watchId);
    }
  };
});

// Call subscribe() to start listening for updates.
const locationsSubscription = locations.subscribe({
  next(position) {
    console.log('Current Position: ', position);
  },
  error(msg) {
    console.log('Error Getting Location: ', msg);
  }
});

// Stop listening for location after 10 seconds
setTimeout(() => {
  locationsSubscription.unsubscribe();
}, 10000);
