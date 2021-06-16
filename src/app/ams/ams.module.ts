import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmsRoutingModule } from './ams-routing.module';
import { AmsComponent } from './ams.component';


@NgModule({
  declarations: [
    AmsComponent
  ],
  imports: [
    CommonModule,
    AmsRoutingModule
  ]
})
export class AmsModule { }
