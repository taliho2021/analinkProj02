import { RouterModule, Routes } from '@angular/router';

import { CountriesComponent } from './countries/countries.component';
import { NgModule } from '@angular/core';
import { TablesComponent } from './tables.component';

const routes: Routes = [
  {  path: '', component: TablesComponent },
  { path: 'countries', component:CountriesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule { }
