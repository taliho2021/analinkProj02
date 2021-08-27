import { AddressComponent } from './address/address.component';
import { CbComponent } from './cb.component';
import { CbRoutingModule } from './cb-routing.module';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { VarChartsModule } from '../var-charts/var-charts.module';

@NgModule({
  declarations: [
    CbComponent,
    AddressComponent
  ],
  imports: [
    CommonModule,
    CbRoutingModule,
    MatCardModule,
    MatIconModule,
    MatTabsModule,
    MatButtonModule,
    FlexLayoutModule,
    VarChartsModule,
    ReactiveFormsModule
  ]
})
export class CbModule { }
