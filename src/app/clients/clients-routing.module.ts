import { RouterModule, Routes } from '@angular/router';

import { ClientsComponent } from './clients.component';
import { ImportersComponent } from './importers/importers.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: ClientsComponent },
  { path: 'importers', component: ImportersComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
