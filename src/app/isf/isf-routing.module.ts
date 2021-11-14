import { RouterModule, Routes } from '@angular/router';

import { IsfComponent } from './isf.component';
import { IsfExcelComponent } from './isf-excel/isf-excel.component';
import { IsfNewComponent } from './isf-new/isf-new.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', 
    component: IsfComponent,
    children: [
      {
        path: 'new',
        component: IsfNewComponent
      },
      { 
        path: 'excel',
        component: IsfExcelComponent
      }]
     }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IsfRoutingModule { }
