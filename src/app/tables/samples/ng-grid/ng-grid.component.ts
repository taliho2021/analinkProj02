import { Component, OnInit, ViewChild } from '@angular/core';

import { AgGridAngular } from 'ag-grid-angular';
import { Customer } from '../../../models/customer';
import { CustomersService } from '../../../services/customers.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ng-grid',
  templateUrl: './ng-grid.component.html',
  styleUrls: ['./ng-grid.component.scss']
})
export class NgGridComponent implements OnInit {

  @ViewChild('agGrid')
  agGrid!: AgGridAngular;

  defaultColDef = {
    sortable: true,
    filter: true
  }

  columnDefs = [
    { field: 'id', sortable: true, filter: true, checkboxSelection: true, rowGroup: true },
    { field: 'name', sortable: true, filter: true },
    { field: 'country.name', sortable: true, filter: true},
    { field: 'country.code', sortable: true, filter: true },
    { field: 'date', sortable: true, filter: true },
    { field: 'status', sortable: true, filter: true},
    { field: 'representative.name', sortable: true, filter: true},
    { field: 'representative.image', sortable: true, filter: true },
    { field: 'balance', sortable: true, filter: true }

  ];

  autoGroupColumnDef = {
    headerName: 'Name',
    field: 'name',
    cellRenderer: 'agGroupCellRenderer',
    cellRendererParams: {
      checkbox: true
    }
  }

  clients: Customer[] =[];

constructor(private http: HttpClient,
            private custService: CustomersService) { }

ngOnInit(): void {
  this.showClients();
  }

showClients(){
  this.custService.getCustomers()
    .subscribe(data =>
       this.clients = data)
  }

getSelectedRows(): void {
      const selectedNodes = this.agGrid.api.getSelectedNodes();
      const selectedData = selectedNodes.map(node => {
        if (node.groupData) {
          return { name: node.key, model: 'Group' };
        }
        return node.data
      });
      const selectedDataStringPresentation = selectedData.map(node => `${node.make} ${node.model}`).join(', ');

      window.alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }

}
