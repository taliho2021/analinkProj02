import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CdkTableModule } from '@angular/cdk/table';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientsModule } from '../clients/clients.module';
import { CommonModule } from '@angular/common';
import { CountriesComponent } from './countries/countries.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ImporterComponent } from './importer/importer.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
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
import { ImporterDetailComponent } from './importer-detail/importer-detail.component';

@NgModule({
  declarations: [
    TablesComponent,
    CountriesComponent,
    StatesComponent,
    ClientsComponent,
    ClientDetailComponent,
    ImporterComponent,
    ImporterDetailComponent
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
    MatFormFieldModule,
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
