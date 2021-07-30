import { CbComponent } from './cb.component';
import { CbRoutingModule } from './cb-routing.module';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';
import { VarChartsModule } from '../var-charts/var-charts.module';

@NgModule({
  declarations: [
    CbComponent
  ],
  imports: [
    CommonModule,
    CbRoutingModule,
    MatCardModule,
    MatIconModule,
    MatTabsModule,
    VarChartsModule
  ]
})
export class CbModule { }
