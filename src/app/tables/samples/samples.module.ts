import 'ag-grid-enterprise';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AgGridModule } from 'ag-grid-angular';
import { AngmatFormComponent } from './angmat-form/angmat-form.component';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgGridComponent } from './ng-grid/ng-grid.component';
import { NgModule } from '@angular/core';
import { NgbsFormComponent } from './ngbs-form/ngbs-form.component';
import { SamplesComponent } from './samples.component';
import { SamplesRoutingModule } from './samples-routing.module';

@NgModule({
  declarations: [
    SamplesComponent,
    AngmatFormComponent,
    NgbsFormComponent,
    NgGridComponent
  ],
  imports: [
    CommonModule,
    SamplesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    AgGridModule.withComponents([])
  ]
})
export class SamplesModule { }
