import { RouterModule, Routes } from '@angular/router';

import { LogInComponent } from './shared/log-in/log-in.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: '', component: LogInComponent},
    { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) }, 
    { path: 'isf', loadChildren: () => import('./isf/isf.module').then(m => m.IsfModule) },
    { path: 'ams', loadChildren: () => import('./ams/ams.module').then(m => m.AmsModule) },
    { path: 'cb', loadChildren: () => import('./cb/cb.module').then(m => m.CbModule) },
    { path: 'clients', loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule) }, 
    { path: 'vendors', loadChildren: () => import('./vendors/vendors.module').then(m => m.VendorsModule) }, 
    { path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) }, 
    { path: 'reports', loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule) }, 
    { path: 'apps', loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule) },
    { path: 'shared', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) },
    { path: 'landing', loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule)}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
