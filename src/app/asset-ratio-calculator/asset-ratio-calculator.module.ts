import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetRatioCalculatorComponent } from './asset-ratio-calculator.component';
import { MaterialImportsModule } from '../material-imports/material-imports.module';
import { AssetScorePipe } from './asset-score.pipe';
import { AssetRatioCalculatorEditComponent } from './edit/edit.component';

@NgModule({
  imports: [CommonModule, MaterialImportsModule],
  declarations: [
    AssetRatioCalculatorComponent,
    AssetScorePipe,
    AssetRatioCalculatorEditComponent,
  ],
  exports: [AssetRatioCalculatorComponent],
})
export class AssetRatioCalculatorModule {}
