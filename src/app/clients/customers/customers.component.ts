import { Component, OnInit } from '@angular/core';

import { Customer } from '../../models/customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  name = "Customers"

  customers: Customer[] =[];

  constructor(private customerService: CustomersService) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(){
    this.customerService.getCustomers()
      .subscribe(data => (this.customers = data))
  }

}

