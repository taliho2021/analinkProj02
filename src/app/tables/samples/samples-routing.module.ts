import { RouterModule, Routes } from '@angular/router';

import { AngmatFormComponent } from './angmat-form/angmat-form.component';
import { NgModule } from '@angular/core';
import { NgbsFormComponent } from './ngbs-form/ngbs-form.component';
import { SamplesComponent } from './samples.component';

const routes: Routes = [
  { path: '', component: SamplesComponent },
  { path: 'ang', component: AngmatFormComponent},
  { path: 'ng', component:NgbsFormComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SamplesRoutingModule { }
