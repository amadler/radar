import { Pipe, PipeTransform } from '@angular/core';
import { ratioCalculatorRow } from './model';

@Pipe({
  name: 'assetScore'
})
export class AssetScorePipe implements PipeTransform {

  transform(row: ratioCalculatorRow): number {
    return row.r2r + row.financialCondition + row.personalScore;
  }

}
