import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreRoutingModule } from './core-routing.module';

import { HttpErrorResponseComponent } from './http-error-response/http-error-response.component';
import { LayoutComponent } from './layout/layout.component';
import { AdminLayoutComponent } from './layout/layouts/admin-layout/admin-layout.component';
import { LayoutFactoryComponent } from './layout/layouts/layout-factory/layout-factory.component';
import { AdminHeaderComponent } from './layout/admin-header/admin-header.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CommonModule } from '@angular/common';

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
  ],
  imports: [CoreRoutingModule, ReactiveFormsModule, CommonModule],
  providers: [],
  entryComponents: [],
})
export class CoreModule {
}
