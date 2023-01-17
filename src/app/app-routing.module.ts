import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutFactoryComponent } from './shared/components/core/layout/layouts/layout-factory/layout-factory.component';
import { LayoutComponent } from './shared/components/core/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LayoutFactoryComponent,
    loadChildren: () => import('./landing/landing.module').then((m) => m.LandingModule)
  },
  // {
  //   path: 'b2b',
  //   component: LayoutComponent,
  //   loadChildren: () => import('./landing/landing.module').then((m) => m.LandingModule),
  // },
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
