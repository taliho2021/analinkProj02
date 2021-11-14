import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { VendorDetailComponent } from './vendor-detail/vendor-detail.component';
import { VendorsComponent } from './vendors.component';

const routes: Routes = [
  { path: '', component: VendorsComponent },
  { path: 'details', component: VendorDetailComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorsRoutingModule { }
