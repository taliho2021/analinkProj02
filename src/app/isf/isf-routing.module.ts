import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsfComponent } from './isf.component';

const routes: Routes = [{ path: '', component: IsfComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IsfRoutingModule { }
