import { RouterModule, Routes } from '@angular/router';

import { HttpErrorResponseComponent } from './http-error-response/http-error-response.component';
import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [],
})
export class CoreRoutingModule {}
