import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaloonserviceRoutingModule } from './saloonservice-routing.module';
import { SaloonserviceComponent } from './view/saloonservice/saloonservice.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SaloonserviceComponent],
  imports: [
    CommonModule,
    SaloonserviceRoutingModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SaloonserviceModule { }
