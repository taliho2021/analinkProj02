import { BarChartComponent } from './bar-chart/bar-chart.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';
import { ChartsModule } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { NgModule } from '@angular/core';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { VarChartsComponent } from './var-charts.component';
import { VarChartsRoutingModule } from './var-charts-routing.module';

@NgModule({
  declarations: [
    VarChartsComponent,
    LineChartComponent,
    BarChartComponent,
    DoughnutChartComponent,
    RadarChartComponent,
    PieChartComponent,
    BubbleChartComponent
  ],
  imports: [
    CommonModule,
    VarChartsRoutingModule,
    ChartsModule
  ],
  exports: [
    VarChartsComponent,
    LineChartComponent,
    BarChartComponent,
    DoughnutChartComponent,
    RadarChartComponent,
    PieChartComponent,
    BubbleChartComponent
  ]
})
export class VarChartsModule { }
