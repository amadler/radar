import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialImportsModule } from './material-imports/material-imports.module';
import { AssetRatioCalculatorModule } from './asset-ratio-calculator/asset-ratio-calculator.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialImportsModule,
    DashboardModule,
    AssetRatioCalculatorModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
