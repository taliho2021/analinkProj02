import { Component, OnInit } from '@angular/core';

import { Customer } from '../../models/customer';
import { CustomersService } from 'src/app/services/customers.service';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  name = "Customers"

  customers: Customer[] =[];
  sortedData: Customer[] =[]

  constructor(private customerService: CustomersService) {
    this.sortedData = this.customers.slice();
   }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(){
    this.customerService.getCustomers()
      .subscribe(data => (this.customers = data))
  }

  sortData(sort:Sort) {
    const data = this.customers.slice();
    if (!sort.active || sort.direction === ''){
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a,b) => {
      const isAsc = sort.direction === 'asc';
      switch(sort.active) {
        case 'id' : return compare(a.id!, b.id!, isAsc);
        case 'name' : return compare(a.name!, b.name!, isAsc);
        case 'company' : return compare(a.company!, b.company!, isAsc);
        case 'status' : return compare(a.status!, b.status!, isAsc);
        case 'activity' : return compare(a.activity!, b.activity!, isAsc);
        case 'balance' : return compare(a.balance!, b.balance!, isAsc);
        default: return 0;
      }
    })
  }

}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

