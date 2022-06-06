import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';

import { IncrementsComponent } from './increments/increments.component';
import { GrphDoughnutComponent } from './grph-doughnut/grph-doughnut.component';

@NgModule({
  declarations: [
    IncrementsComponent,
    GrphDoughnutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule
  ],
  exports: [
    IncrementsComponent,
    GrphDoughnutComponent
  ]
})
export class ComponentsModule { }
