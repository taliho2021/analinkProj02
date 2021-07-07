import { AmsComponent } from './ams.component';
import { AmsRoutingModule } from './ams-routing.module';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AmsComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatIconModule,
    AmsRoutingModule
  ]
})
export class AmsModule { }
