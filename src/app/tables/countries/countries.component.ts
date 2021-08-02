import { Component, OnInit } from '@angular/core';

import { Country } from '../../models/country';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  countries: Country[] =[];

  constructor(private co: CountryService) {
  }

  ngOnInit(): void {
     this.showCountries();
  }

  showCountries() {
    this.co.getCountries()
    .subscribe(data => this.countries = data, error => console.log(error))
  }
}
