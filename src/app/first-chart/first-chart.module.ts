import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstChartComponent } from './first-chart.component';



@NgModule({
  declarations: [FirstChartComponent],
  exports: [FirstChartComponent],
  imports: [
    CommonModule
  ]
})
export class FirstChartModule { }
