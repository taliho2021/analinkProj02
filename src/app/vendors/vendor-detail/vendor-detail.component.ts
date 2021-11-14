import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.scss']
})
export class VendorDetailComponent implements OnInit {

    vendorForm = this.fb.group({
        vendorId: [''],
        name:  ['', Validators.required],
        address1: ['', Validators.required],
        address2: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        postalCode: [null, Validators.compose([
          Validators.required, Validators.minLength(5), Validators.maxLength(5)])
        ],
        country: ['', Validators.required],
        phone1:  [null, Validators.required],
        email:  ['', Validators.required],
        website: ['', Validators.required]
      });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
