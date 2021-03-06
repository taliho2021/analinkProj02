import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddressDoComponent } from './address-do/address-do.component';
import { AddressFnComponent } from './address-fn/address-fn.component';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LogInComponent } from './log-in/log-in.component';
import { LogOutComponent } from './log-out/log-out.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NaviComponent } from './navi/navi.component';
import { NgModule } from '@angular/core';
import { SharedComponent } from './shared.component';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [
    SharedComponent,
    LogInComponent,
    LogOutComponent,
    AddressDoComponent,
    AddressFnComponent,
    NaviComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    SharedRoutingModule
  ],
  exports: [
    LogInComponent,
    LogOutComponent,
    AddressDoComponent,
    AddressFnComponent,
    NaviComponent
  ]

})
export class SharedModule { }
