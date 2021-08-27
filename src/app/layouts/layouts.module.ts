import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { LayoutsComponent } from './layouts.component';
import { LayoutsRoutingModule } from './layouts-routing.module';
import { MainComponent } from './main/main.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    LayoutsComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LayoutsRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  exports: [
    MainComponent
  ]
})
export class LayoutsModule { }
