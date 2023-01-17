import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutFactoryComponent } from './shared/components/core/layout/layouts/layout-factory/layout-factory.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LayoutFactoryComponent,
  }
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
