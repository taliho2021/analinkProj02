import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddressDoComponent } from './address-do/address-do.component';
import { AddressFnComponent } from './address-fn/address-fn.component';
import { CommonModule } from '@angular/common';
import { EntrySComponent } from './entry-s/entry-s.component';
import { FdaComponent } from './fda/fda.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LogInComponent } from './log-in/log-in.component';
import { LogOutComponent } from './log-out/log-out.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MenuListItemComponent } from './menu-list-item/menu-list-item.component';
import { NaviComponent } from './navi/navi.component';
import { NgModule } from '@angular/core';
import { SharedComponent } from './shared.component';
import { SharedRoutingModule } from './shared-routing.module';

const firebaseConfig = {
  apiKey: "AIzaSyBba-yq4AnlymEhGPVBj98BxSjcyUzVPDY",
  authDomain: "login-01-ana.firebaseapp.com",
  databaseURL: "https://login-01-ana.firebaseio.com",
  projectId: "login-01-ana",
  storageBucket: "login-01-ana.appspot.com",
  messagingSenderId: "94042059081",
  appId: "1:94042059081:web:1a043397ee70dbc18c6a98"
};


@NgModule({
  declarations: [
    SharedComponent,
    LogInComponent,
    LogOutComponent,
    AddressDoComponent,
    AddressFnComponent,
    NaviComponent,
    MenuListItemComponent,
    EntrySComponent,
    FdaComponent
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
    MatDividerModule,
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
