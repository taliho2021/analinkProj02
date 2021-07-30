import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CountryService } from './services/country.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { IsfModule } from './isf/isf.module';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { VarChartsModule } from './var-charts/var-charts.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    IsfModule,
    FlexLayoutModule,
    VarChartsModule
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
