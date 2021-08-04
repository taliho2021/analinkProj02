import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

import { Customer } from '../../models/customer';
import { CustomersService } from 'src/app/services/customers.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  clients: Customer[] =[];
  length: any;
  pageSize: any;
  pageSizeOptions: number[] = [5,10,25, 100];
  displayedColumns: string[] = ['id', 'name', 'country', 'coCode',
           'date', 'status', 'activity', 'representative',
          'balance'
]
  dataSource: MatTableDataSource<Customer>

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.displayedColumns, event.previousIndex, event.currentIndex);
  }

  @ViewChild(MatSort)  sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private customerService: CustomersService) {
    this.dataSource = new MatTableDataSource<Customer>();
   }

  ngOnInit(): void {
    this.showClients();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  showClients(){
    this.customerService.getCustomers()
      .subscribe(data =>
        this.dataSource.data = data)
  }

  onRowClicked(row: any){
    console.log('Row clicked: ', row);
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}







