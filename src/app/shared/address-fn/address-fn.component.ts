import { Component, OnInit } from '@angular/core';
import { Country, CountryService } from 'src/app/services/country.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-address-fn',
  templateUrl: './address-fn.component.html',
  styleUrls: ['./address-fn.component.scss']
})


export class AddressFnComponent implements OnInit {

    addressForm = this.fb.group({
    company: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    address2: null,
    city: [null, Validators.required],
    country: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    shipping: ['free', Validators.required]
  });

  hasUnitNumber = false;
  countries: [] | undefined

  constructor(private fb: FormBuilder, private country: CountryService) { }
  
  ngOnInit(): void {
  }

  onSubmit(): void {
    alert('Thanks!');
  }

  showCountries() {
      this.country.getCountries();        ;
  }

}
