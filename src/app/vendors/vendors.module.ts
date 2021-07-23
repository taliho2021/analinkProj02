import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';
import { VendorsComponent } from './vendors.component';
import { VendorsRoutingModule } from './vendors-routing.module';

@NgModule({
  declarations: [
    VendorsComponent
  ],
  imports: [
    CommonModule,
    VendorsRoutingModule,
    MatCardModule,
    MatIconModule,
    MatTabsModule
  ]
})
export class VendorsModule { }
