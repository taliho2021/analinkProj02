import { ChartsComponent } from './charts.component';
import { ChartsRoutingModule } from './charts-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    ChartsComponent
  ],
  imports: [
    CommonModule,
    ChartsRoutingModule
  ],
  exports: [
    ChartsComponent
  ]
})
export class ChartsModule { }
