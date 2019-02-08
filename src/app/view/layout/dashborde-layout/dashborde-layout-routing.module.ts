import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashbordeLayoutComponent } from './view/dashborde-layout/dashborde-layout.component';

const routes: Routes = [
  {
    path:'',
    component:DashbordeLayoutComponent,
    children:[
      {
        path:'customer',
        loadChildren : "src/app/view/pages/customer/customer.module#CustomerModule"
      },
      {
        path:'service',
        loadChildren : "src/app/view/pages/saloonservice/saloonservice.module#SaloonserviceModule"
      },
      {
        path:'appoinment',
        loadChildren : "src/app/view/pages/appoinment/appoinment.module#AppoinmentModule"
      },
      {
        path:'reports',
        loadChildren : "src/app/view/pages/reports/reports.module#ReportsModule"
      },{
        path:'payments',
        loadChildren : "src/app/view/pages/payment/payment.module#PaymentModule"
      }
      
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashbordeLayoutRoutingModule { }
