import * as customerData from '../../../assets/data/customers.json';

import { Component, OnInit } from '@angular/core';

interface Country {
  name?: string;
  code?:string;
}

interface Representative {
  name?: string;
  image?: string;
}

interface Customer {
  id?: number;
  name?: string;
  country?: Country;
  company?: string;
  date? : string | Date;
  status?: string;
  activity?: number;
  representative?: Representative;
  verified?: boolean;
  balance?: number;
}

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  name = "Customers"

  public customers: Customer[] = customerData;

  constructor() { }

  ngOnInit(): void {
  }

}

