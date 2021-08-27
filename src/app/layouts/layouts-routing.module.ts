import { RouterModule, Routes } from '@angular/router';

import { LayoutsComponent } from './layouts.component';
import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: LayoutsComponent },
  { path: 'main', component: MainComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
