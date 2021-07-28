import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClientsModule } from '../clients/clients.module';
import { CommonModule } from '@angular/common';
import { CountriesComponent } from './countries/countries.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TablesComponent } from './tables.component';
import { TablesRoutingModule } from './tables-routing.module';

@NgModule({
  declarations: [
    TablesComponent,
    CountriesComponent
  ],
  imports: [
    CommonModule,
    TablesRoutingModule,
    MatCardModule,
    MatIconModule,
    MatTabsModule,
    ClientsModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class TablesModule { }
