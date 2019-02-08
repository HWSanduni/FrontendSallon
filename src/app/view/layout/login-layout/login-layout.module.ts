import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginLayoutRoutingModule } from './login-layout-routing.module';
import { LoginLayoutComponent } from './view/login-layout/login-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
 


@NgModule({
  declarations: [LoginLayoutComponent],
  imports: [
    CommonModule,
    LoginLayoutRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
     
  ]
})
export class LoginLayoutModule { }
