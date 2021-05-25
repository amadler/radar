import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MaterialImportsModule } from '../material-imports/material-imports.module';
import { AssetRatioCalculatorModule } from '../asset-ratio-calculator/asset-ratio-calculator.module';



@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    MaterialImportsModule,
    AssetRatioCalculatorModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
