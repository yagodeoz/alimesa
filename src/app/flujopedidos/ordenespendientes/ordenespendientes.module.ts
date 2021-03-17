import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdenespendientesRoutingPageRoutingModule } from './ordenespendientes-routing.module';

import { OrdenespendientesPage } from './ordenespendientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdenespendientesRoutingPageRoutingModule
  ],
  declarations: [OrdenespendientesPage]
})
export class OrdenespendientesPageModule {}
