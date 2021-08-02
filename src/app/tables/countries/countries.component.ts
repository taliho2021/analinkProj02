import { Component, OnInit } from '@angular/core';

import { Country } from '../../models/country';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  countries: any =[];

  constructor(private country: CountryService) {
  }

  ngOnInit(): void {
     this.showCountries;
  }

  showCountries() {
    return this.country.getCountries()
    .subscribe((data) => (this.countries = data));
  }
}
