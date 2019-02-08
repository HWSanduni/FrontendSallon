import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaloonserviceComponent } from './view/saloonservice/saloonservice.component';

const routes: Routes = [
  {
    path:'',
    component:SaloonserviceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaloonserviceRoutingModule { }
