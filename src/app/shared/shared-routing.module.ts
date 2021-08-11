import { RouterModule, Routes } from '@angular/router';

import { AddressDoComponent } from './address-do/address-do.component';
import { AddressFnComponent } from './address-fn/address-fn.component';
import { EntrySComponent } from './entry-s/entry-s.component';
import { FdaComponent } from './fda/fda.component';
import { LogInComponent } from './log-in/log-in.component';
import { NaviComponent } from './navi/navi.component';
import { NgModule } from '@angular/core';
import { SharedComponent } from './shared.component';

const routes: Routes = [
  { path: '', component: SharedComponent},
  { path: 'login', component: LogInComponent},
  { path: 'navi', component: NaviComponent},
  { path: 'address-fn', component: AddressFnComponent},
  { path: 'address-do', component: AddressDoComponent},
  { path: 'entry', component: EntrySComponent },
  { path: 'fda', component: FdaComponent} ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
