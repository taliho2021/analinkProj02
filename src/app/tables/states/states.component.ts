import { Component, OnInit, ViewChild } from '@angular/core';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { State } from '../../models/state';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.scss']
})
export class StatesComponent implements OnInit {
  states: State[]=[];
  length: any;
  pageSize: any;
  pageSizeOptions: number[] = [5,10,25, 100];
  displayedColumns: string[] = ['name', 'abbreviation']
  dataSource: MatTableDataSource<State>

  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private st: StateService) {
    this.dataSource = new MatTableDataSource<State>()
   }

  ngOnInit() {
    this.showStates();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  showStates() {
    this.st.getStates()
    .subscribe(data =>
      this.dataSource.data = data, error => console.log(error));
  }

  onRowClicked(row: any){
    console.log('Row clicked: ', row);
  }

 }

