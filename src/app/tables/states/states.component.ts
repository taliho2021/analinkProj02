import { Component, OnInit } from '@angular/core';

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

  constructor(private st: StateService) {
    this.dataSource = new MatTableDataSource<State>()
   }

  ngOnInit() {
    this.showStates();
    this.dataSource.data = this.states
  }

  showStates() {
    this.st.getStates()
    .subscribe(data => this.states = data, error => console.log(error)); 
    console.log(this.states);
    
  }
 }

