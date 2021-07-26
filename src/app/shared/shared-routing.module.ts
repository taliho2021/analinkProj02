import { RouterModule, Routes } from '@angular/router';

import { AddressFnComponent } from './address-fn/address-fn.component';
import { LogInComponent } from './log-in/log-in.component';
import { NaviComponent } from './navi/navi.component';
import { NgModule } from '@angular/core';
import { SharedComponent } from './shared.component';

const routes: Routes = [
  { path: '', component: SharedComponent},
  { path: 'login', component: LogInComponent},
  { path: 'navi', component: NaviComponent},
  { path: 'address-fn', component: AddressFnComponent} ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
