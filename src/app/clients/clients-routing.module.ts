import { RouterModule, Routes } from '@angular/router';

import { ClientsComponent } from './clients.component';
import { CustomersComponent } from './customers/customers.component';
import { ImportersComponent } from './importers/importers.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: ClientsComponent },
  { path: 'importers', component: ImportersComponent},
  { path: 'customers', component: CustomersComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
