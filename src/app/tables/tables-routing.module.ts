import { RouterModule, Routes } from '@angular/router';

import { CountriesComponent } from './countries/countries.component';
import { NgModule } from '@angular/core';
import { StatesComponent } from './states/states.component';
import { TablesComponent } from './tables.component';

const routes: Routes = [
  {  path: '', component: TablesComponent },
  {  path: 'countries', component:CountriesComponent},
  {  path: 'states', component: StatesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule { }
