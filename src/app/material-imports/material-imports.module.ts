import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';

import {MatDialogModule} from '@angular/material/dialog';



const deps = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatTableModule,
  MatInputModule,
  MatDialogModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    deps
  ],
  exports: deps
})
export class MaterialImportsModule { }
