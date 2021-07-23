import { CbComponent } from './cb.component';
import { CbRoutingModule } from './cb-routing.module';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    CbComponent
  ],
  imports: [
    CommonModule,
    CbRoutingModule,
    MatCardModule,
    MatIconModule,
    MatTabsModule
  ]
})
export class CbModule { }
