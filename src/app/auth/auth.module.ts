import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AuthInterceptor } from './auth.interceptor';
import { AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AuthRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class AuthModule { }
