import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AssetRatioCalculatorEditComponent } from './edit/edit.component';
import { ratioCalculatorRow } from './model';


const ELEMENT_DATA: ratioCalculatorRow[] = [
  {name: 'mab', r2r: 3.63, financialCondition: 0, personalScore: 1, score: 0},
  {name: 'agt', r2r: 1.97, financialCondition: 4, personalScore: 0, score: 0},
  {name: 'bbt', r2r: 2.05, financialCondition: 4, personalScore: 1, score: 0},
];

@Component({
  selector: 'app-asset-ratio-calculator',
  templateUrl: './asset-ratio-calculator.component.html',
  styleUrls: ['./asset-ratio-calculator.component.scss']
})
export class AssetRatioCalculatorComponent implements OnInit {
  displayedColumns: string[] = ['name', 'r2r', 'financialCondition', 'personalScore', 'score', 'opt'];
  dataSource = ELEMENT_DATA;
  constructor(public dialog: MatDialog) { }

  openDialog(element: any){
    const dialogRef = this.dialog.open(AssetRatioCalculatorEditComponent, {
      width: '250px',
      data: element
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     // this.animal = result;
    });
  }
  ngOnInit(): void {
  }

}
