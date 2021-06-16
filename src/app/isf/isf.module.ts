import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IsfRoutingModule } from './isf-routing.module';
import { IsfComponent } from './isf.component';


@NgModule({
  declarations: [
    IsfComponent
  ],
  imports: [
    CommonModule,
    IsfRoutingModule
  ]
})
export class IsfModule { }
