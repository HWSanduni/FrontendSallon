import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashbordeLayoutRoutingModule } from './dashborde-layout-routing.module';
import { DashbordeLayoutComponent } from './view/dashborde-layout/dashborde-layout.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [DashbordeLayoutComponent],
  imports: [
    CommonModule,
    DashbordeLayoutRoutingModule,
    MatSidenavModule,
    MatToolbarModule
  ]
})
export class DashbordeLayoutModule { }
