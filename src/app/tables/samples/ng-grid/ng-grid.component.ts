import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-grid',
  templateUrl: './ng-grid.component.html',
  styleUrls: ['./ng-grid.component.scss']
})
export class NgGridComponent implements OnInit {
  
  columnDefs = [
    { headerName:'Make', field:'make' }
    { headerName:'Model', field:'model' }
    { headerName:'Price', field:'price' }
  ]

  rowData =[
    { make: 'Ford', model:'Bronco', price: 25000},
    { make: 'Tesla', model:'X', price: 30000 },
    { make: 'Mercedes', model:'GL400', price: 70000 }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
