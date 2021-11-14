import { RouterModule, Routes } from '@angular/router';

import { BarChartComponent } from './bar-chart/bar-chart.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { NgModule } from '@angular/core';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { VarChartsComponent } from './var-charts.component';

const routes: Routes = [
  { path: '', component: VarChartsComponent },
  { path: 'line', component: LineChartComponent},
  { path: 'bar', component: BarChartComponent},
  { path: 'doughnut', component: DoughnutChartComponent},
  { path: 'radar', component: RadarChartComponent},
  { path: 'pie', component: PieChartComponent },
  { path: 'bubble', component: BubbleChartComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VarChartsRoutingModule { }
