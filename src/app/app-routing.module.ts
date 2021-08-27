import { RouterModule, Routes } from '@angular/router';

import { LogInComponent } from './shared/log-in/log-in.component';
import { MainComponent } from './layouts/main/main.component';
import { NaviComponent } from './shared/navi/navi.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {path: '', pathMatch:'full', redirectTo:' NaviComponent'},
    { path: 'cb', loadChildren: () => import('./cb/cb.module').then(m => m.CbModule) },
    { path: 'clients', loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule) },
    { path: 'vendors', loadChildren: () => import('./vendors/vendors.module').then(m => m.VendorsModule) },
    { path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) },
    { path: 'reports', loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule) },
    { path: 'log-in', component: LogInComponent},
    { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
    { path: 'isf', loadChildren: () => import('./isf/isf.module').then(m => m.IsfModule) },
    { path: 'ams', loadChildren: () => import('./ams/ams.module').then(m => m.AmsModule) },
    { path: 'shared', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) },
    { path: 'landing', loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule)},
    { path: 'varCharts', loadChildren: () => import('./var-charts/var-charts.module').then(m => m.VarChartsModule)},
    { path: 'layouts', loadChildren: () => import('./layouts/layouts.module').then(m => m.LayoutsModule) }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
