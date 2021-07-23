import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';
import { TablesComponent } from './tables.component';
import { TablesRoutingModule } from './tables-routing.module';

@NgModule({
  declarations: [
    TablesComponent
  ],
  imports: [
    CommonModule,
    TablesRoutingModule,
    MatCardModule,
    MatIconModule,
    MatTabsModule
  ]
})
export class TablesModule { }
