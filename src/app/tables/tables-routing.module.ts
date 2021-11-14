import { RouterModule, Routes } from '@angular/router';

import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ClientsComponent } from './clients/clients.component';
import { CountriesComponent } from './countries/countries.component';
import { ImporterComponent } from './importer/importer.component';
import { NgModule } from '@angular/core';
import { StatesComponent } from './states/states.component';
import { TablesComponent } from './tables.component';

const routes: Routes = [
  {  path: '', component: TablesComponent },
  {  path: 'countries', component:CountriesComponent},
  {  path: 'states', component: StatesComponent},
  {  path: 'clients', component: ClientsComponent},
  {  path: 'clients/:id', component: ClientDetailComponent},
  {  path: 'importer', component: ImporterComponent},
  {  path: 'samples', loadChildren: () => import('./samples/samples.module').then(m => m.SamplesModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule { }
