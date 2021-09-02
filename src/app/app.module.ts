import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AgGridModule } from 'ag-grid-angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CountryService } from './services/country.service';
import { IsfModule } from './isf/isf.module';
import { LayoutsModule } from './layouts/layouts.module';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AgGridModule.withComponents([]),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    IsfModule,
    LayoutsModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
