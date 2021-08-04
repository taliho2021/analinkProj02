import { ActivatedRoute, Params } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

import { Customer } from '../../models/customer';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss']
})
export class ClientDetailComponent implements OnInit {
  @Input() client!: Customer; 
  
  constructor() { }

  //snapshot loaded once during ngInit

  ngOnInit(): void {
     
  }
 
}
