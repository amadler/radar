export enum PersonalScore{
  'bad', 'weak', 'neutral', 'strong', 'excelent'
}

export interface ratioCalculatorRow {
  name: string;
  r2r: number;
  financialCondition: number;
  personalScore: PersonalScore;
  score?: number
}

export interface DialogData extends ratioCalculatorRow {

}
