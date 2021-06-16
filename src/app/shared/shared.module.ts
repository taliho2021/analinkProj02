import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LogInComponent } from './log-in/log-in.component';
import { LogOutComponent } from './log-out/log-out.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { SharedComponent } from './shared.component';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [
    SharedComponent,
    LogInComponent,
    LogOutComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    FlexLayoutModule,
    SharedRoutingModule
  ],
  exports: [
    LogInComponent,
    LogOutComponent
  ]

})
export class SharedModule { }
