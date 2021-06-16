import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmsComponent } from './ams.component';

const routes: Routes = [{ path: '', component: AmsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmsRoutingModule { }
