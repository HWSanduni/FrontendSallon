import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppoinmentComponent } from './view/appoinment/appoinment.component';

const routes: Routes = [
  {
    path:'',
    component:AppoinmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppoinmentRoutingModule { }
