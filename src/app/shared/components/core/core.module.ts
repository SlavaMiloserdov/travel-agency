import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreRoutingModule } from './core-routing.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { CommonModule } from '@angular/common';

import { HttpErrorResponseComponent } from './http-error-response/http-error-response.component';
import { LayoutComponent } from './layout/layout.component';
import { AdminLayoutComponent } from './layout/layouts/admin-layout/admin-layout.component';
import { LayoutFactoryComponent } from './layout/layouts/layout-factory/layout-factory.component';
import { AdminHeaderComponent } from './layout/admin-header/admin-header.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AuthMenuComponent } from './layout/header/auth-menu/auth-menu.component';

@NgModule({
  exports: [LayoutComponent],
  declarations: [
    LayoutComponent,
    HttpErrorResponseComponent,
    AdminLayoutComponent,
    LayoutFactoryComponent,
    AdminHeaderComponent,
    HeaderComponent,
    FooterComponent,
    AuthMenuComponent,
  ],
  imports: [CoreRoutingModule, ReactiveFormsModule, CommonModule, AngularSvgIconModule],
  providers: [],
  entryComponents: [],
})
export class CoreModule {
}
