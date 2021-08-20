import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { AgGridAngular } from 'ag-grid-angular';
import { CustomStatsToolPanel } from './custom-stats-tool-panel.component';
import { Customer } from '../../../models/customer';
import { CustomersService } from '../../../services/customers.service';
import { FormControl } from '@angular/forms';
import { GridApi } from 'ag-grid-community';
import { HttpClient } from '@angular/common/http';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-ng-grid',
  templateUrl: './ng-grid.component.html',
  styleUrls: ['./ng-grid.component.scss']
})
export class NgGridComponent implements OnInit {

  @ViewChild('agGrid')
  agGrid!: AgGridAngular;

  // Search query
  q = new FormControl('')

  // Unsubscribe from observables when the component is destroyed
  private destroy = new Subject()

  // The ag-Grid Grid API
  private gridApi!: GridApi

  defaultColDef = {
    sortable: true,
    filter: true,
    editable: true
  }

  pagination = true
  paginationPageSize = 10

  columnDefs = [
    { headerName: 'Client Name', field: 'id', checkboxSelection: true },
    { field: 'name', filter: 'agTextColumnFilter',
              filterParams: {
                filterOptions: ['contains', 'notContains']

    }},
    { field: 'country.name'},
    { field: 'country.code' },
    { field: 'date', filter: 'date'},     
    { field: 'status'},
    { field: 'representative.name'},
    { field: 'representative.image'},
    { field: 'balance', filter: 'agNumberColumnFilter',
          filterParams: {
            applyButton: true,
            clearButton: true
          }}

  ];

  autoGroupColumnDef = {
    headerName: 'Name',
    field: 'name',
    cellRenderer: 'agGroupCellRenderer',
    cellRendererParams: {
      checkbox: true
    }
  }

  groupDisplayType = {
    groupDisplayType :'singleColumn'
  }

  clients: Customer[] =[];

  sideBar = {
    toolPanels: [
      {
        id: 'columns',
        labelDefault: 'Columns',
        labelKey: 'columns',
        iconKey: 'columns',
        toolPanel: 'agColumnsToolPanel',
      },
      {
        id: 'filters',
        labelDefault: 'Filters',
        labelKey: 'filters',
        iconKey: 'filter',
        toolPanel: 'agFiltersToolPanel',
      },
      {
        id: 'customStats',
        labelDefault: 'Custom Stats',
        labelKey: 'customStats',
        iconKey: 'custom-stats',
        toolPanel: 'customStatsToolPanel',
      },
    ],
    defaultToolPanel: 'customStats',
  }

  frameworkComponents = { customStatsToolPanel: CustomStatsToolPanel}

constructor(private http: HttpClient,
            private custService: CustomersService) { }

ngOnInit(): void {
  this.showClients();

  this.q.valueChanges
    .pipe(takeUntil(this.destroy))
    .subscribe(value =>
  this.gridApi.setQuickFilter(value))
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

  onGridReady({ api} : { api: GridApi}) {
    this.gridApi = api
  }


}
