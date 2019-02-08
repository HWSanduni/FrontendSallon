import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppoinmentRoutingModule } from './appoinment-routing.module';
import { AppoinmentComponent } from './view/appoinment/appoinment.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppoinmentComponent],
  imports: [
    CommonModule,
    AppoinmentRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AppoinmentModule { }
