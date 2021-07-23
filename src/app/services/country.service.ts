import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Country {
  country: string,
  abbreviation: string
}

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  getCountries() {
    return this.http.get<Country>('assets/data/countries.json')
  }
}
