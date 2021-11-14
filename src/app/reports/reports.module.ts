import { ClientsModule } from '../clients/clients.module';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';
import { ReportsComponent } from './reports.component';
import { ReportsRoutingModule } from './reports-routing.module';

@NgModule({
  declarations: [
    ReportsComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    MatCardModule,
    MatIconModule,
    MatTabsModule,
    ClientsModule
  ]
})
export class ReportsModule { }
