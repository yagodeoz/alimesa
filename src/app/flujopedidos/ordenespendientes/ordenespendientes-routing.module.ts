import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdenespendientesPage } from './ordenespendientes.page';

const routes: Routes = [
  {
    path: '',
    component: OrdenespendientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdenespendientesRoutingPageRoutingModule {}
