import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-address-do',
  templateUrl: './address-do.component.html',
  styleUrls: ['./address-do.component.scss']
})
export class AddressDoComponent implements OnInit {
  
  addressForm = this.fb.group({
    company: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    address2: null,
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    shipping: ['free', Validators.required]
  });

  hasUnitNumber = false;

  States: any =[];

  constructor(private fb: FormBuilder, private state: StateService) { }

  ngOnInit(): void {
    this.showStates();
  }

 
  onSubmit(): void {
    this.addressForm.reset()
  }

  showStates() {
    return this.state.getStates().subscribe((data: {}) => {
      this.States = data;
    })
  }

}
