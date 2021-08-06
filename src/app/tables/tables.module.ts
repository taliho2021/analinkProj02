import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CdkTableModule } from '@angular/cdk/table';
import { ClientsComponent } from './clients/clients.component';
import { ClientsModule } from '../clients/clients.module';
import { CommonModule } from '@angular/common';
import { CountriesComponent } from './countries/countries.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { StatesComponent } from './states/states.component';
import { TablesComponent } from './tables.component';
import { TablesRoutingModule } from './tables-routing.module';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ImporterComponent } from './importer/importer.component';

@NgModule({
  declarations: [
    TablesComponent,
    CountriesComponent,
    StatesComponent,
    ClientsComponent,
    ClientDetailComponent,
    ImporterComponent
  ],
  imports: [
    CommonModule,
    TablesRoutingModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatTabsModule,
    ClientsModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    CdkTableModule,
    DragDropModule
  ],
  exports: [
    TablesComponent,
    CountriesComponent,
    StatesComponent
  ]
})
export class TablesModule { }
