import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { VendorDetailComponent } from './vendor-detail/vendor-detail.component';
import { VendorsComponent } from './vendors.component';
import { VendorsRoutingModule } from './vendors-routing.module';

@NgModule({
  declarations: [
    VendorsComponent,
    VendorDetailComponent
  ],
  imports: [
    CommonModule,
    VendorsRoutingModule,
    MatCardModule,
    MatIconModule,
    MatTabsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule
  ]
})
export class VendorsModule { }
