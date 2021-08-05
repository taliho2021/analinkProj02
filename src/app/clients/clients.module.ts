import { ClientsComponent } from './clients.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers/customers.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ImportersComponent } from './importers/importers.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ClientsComponent,
    ImportersComponent,
    CustomersComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSortModule,
    MatTableModule,
    FlexLayoutModule,
    ClientsRoutingModule
  ],
  exports: [
    CustomersComponent
  ]
})
export class ClientsModule { }
