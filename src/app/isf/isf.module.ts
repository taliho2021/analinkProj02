import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IsfComponent } from './isf.component';
import { IsfHeaderComponent } from './isf-header/isf-header.component';
import { IsfHtsComponent } from './isf-hts/isf-hts.component';
import { IsfPartiesComponent } from './isf-parties/isf-parties.component';
import { IsfRoutingModule } from './isf-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    IsfComponent,
    IsfHeaderComponent,
    IsfPartiesComponent,
    IsfHtsComponent
  ],
  imports: [
    CommonModule,
    IsfRoutingModule,
    FormsModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    SharedModule
  
  ]
})
export class IsfModule { }
