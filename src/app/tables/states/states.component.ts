import { Component, OnInit } from '@angular/core';

import { State } from '../../models/state';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.scss']
})
export class StatesComponent implements OnInit {

  states: State[]=[];

  constructor(private st: StateService) { }

  ngOnInit(): void {
    this.showStates();
  }

  showStates() {
    this.st.getStates()
    .subscribe(data => this.states = data, error => console.log(error));
    }
 }
 
